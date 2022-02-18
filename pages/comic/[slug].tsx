/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  IconButton,
  TextField,
  Stack,
  Skeleton,
} from "@mui/material";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AccessTime,
  Bento,
  Book,
  Bookmark,
  BookmarkAdd,
  ListAlt,
  RemoveRedEye,
  Report,
  Star,
} from "@mui/icons-material";
import { ComicCard } from "../../components/ComicCard";
import { useNavbarStore } from "../../stores/navbar";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from "next";
import { Model } from "../../types";
import { gql, useQuery } from "@apollo/client";
import { client } from "../../modules/client";
import moment from "moment";
import { NextSeo } from "next-seo";
import { SEO } from "../../modules/seo";
import { capitalizeFirstLetter } from "../../modules/helper";
import RenderXTime from "../../components/RenderXTime";
import SortIcon from "@mui/icons-material/Sort";
import LazyImage from "../../components/LazyImage";
interface SlugPageProps extends WithRouterProps {
  comic: Model["Comic"];
  top: Model["Comic"][];
}

function Slug({ top, router, comic }: SlugPageProps) {
  const [chapMode, setChapMode] = useState<"grid" | "list">("list");

  const [search, setSearch] = useState("");

  const [sortMode, setSortMode] = useState<"desc" | "asc">("desc");
  const { setTransparent, setTransparentMode } = useNavbarStore();

  const { data: { findManyChapter: chaptersRaw } = {}, loading } = useQuery<{
    findManyChapter: Model["Chapter"][];
  }>(
    gql`
      query FindChapterComic($where: ChapterWhereInput) {
        findManyChapter(where: $where) {
          id
          name
          createdAt
        }
      }
    `,
    {
      variables: {
        where: {
          comicId: {
            equals: comic.id,
          },
        },
      },
    }
  );

  const chapters = chaptersRaw ? [...chaptersRaw] : [];

  useEffect(() => {
    setTransparent(true);
    setTransparentMode(true);
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
      setTransparentMode(false);
      setTransparent(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setTransparent(scrolled == 0);
  };

  const { push } = router;

  const chaptersFiltered = search
    ? chapters?.filter((chapter) => {
        return chapter.name
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    : chapters;

  const sortFunction = (e: Model["Chapter"], x: Model["Chapter"]) =>
    sortMode == "desc" ? x.name - e.name : e.name - x.name;

  return (
    <div>
      <NextSeo
        title={"Komik " + comic.name + SEO.padding}
        description={comic.description ?? ""}
        canonical={SEO.canonical + "/comic/" + comic.slug}
        openGraph={{
          url: SEO.canonical + "/comic/" + comic.slug,
          title: "Komik " + comic.name + SEO.padding,
          description: comic.description ?? "",
          type: "article",
          article: {
            publishedTime: moment(comic.createdAt).format(),
            modifiedTime: moment(comic.updatedAt).format(),
            authors: [SEO.canonical + "/list/author/" + comic.author.slug],
            tags: comic.genres.map((e) => e.name),
          },
          images: [
            {
              url: comic.thumb,
              width: 200,
              height: 250,
              alt: "Komik " + comic.name,
            },
          ],
        }}
        twitter={{
          handle: "@gudang_komik",
          site: "@gudang_komik",
          cardType: "summary_large_image",
        }}
      />
      <Paper>
        <Box
          sx={{
            position: "relative",
            height: {
              xs: 600,
              md: 570,
            },
          }}
        >
          <Box
            sx={{
              height: 250 * 2,
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%),linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${
                comic.thumbWide ?? comic.thumb
              }')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>

          <Box
            sx={{
              bottom: 125,
              position: "absolute",
              width: "100%",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 2,
              pl: {
                xs: 2,
                sm: 6,
              },
              flexDirection: {
                xs: "colurn",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                width={{
                  xs: "100%",
                  sm: "auto",
                }}
              >
                <LazyImage
                  src={comic.thumb}
                  height={320 / 1.2}
                  width={240 / 1.2}
                  alt="Cover"
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  {comic.name}
                </Typography>
                <Link href={"/list/author/" + comic.author.slug}>
                  <a>
                    <Typography variant="body1" textTransform={"uppercase"}>
                      {comic.author.name}
                    </Typography>
                  </a>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                >
                  {comic.name}
                </Typography>

                <Link href={"/list/author/" + comic.author.slug}>
                  <a>
                    <Typography variant="h4" textTransform={"uppercase"}>
                      {comic.author.name}
                    </Typography>
                  </a>
                </Link>
              </Box>
              <Box display="flex" gap={1}>
                <Typography>{comic.status}</Typography>
                <Box display="flex" gap={1} alignItems="center">
                  <Star /> {comic.rating}
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <RemoveRedEye /> {comic.views}
                </Box>
                <Box display="flex" gap={1} alignItems="center">
                  <Bookmark /> {0}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box p={2} display="flex" gap={1}>
            <Box display="flex" gap={1}>
              <Button variant="contained" endIcon={<BookmarkAdd />}>
                IKUTI KOMIK
              </Button>
              <Button variant="contained" endIcon={<Book />}>
                BACA
              </Button>
              <Button variant="contained" endIcon={<Report />}>
                LAPOR
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />

            <Stack
              direction="row"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Chip
                sx={{ mx: 0.5 }}
                label={capitalizeFirstLetter(comic.type)}
                onClick={() => push("/list/comic/" + comic.type)}
              />
              <Divider orientation="vertical" flexItem />
              {comic.genres.map((e, i) => (
                <Chip
                  sx={{ mx: 0.5 }}
                  key={e.id}
                  label={e.name}
                  onClick={() => push("/list/genre/" + e.slug)}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          width: "100%",
          overflowX: "auto",
          my: 2,
          p: 1,
          display: {
            xs: "undefined",
            sm: "none",
          },
        }}
      >
        <Chip
          sx={{ mx: 0.5 }}
          label={capitalizeFirstLetter(comic.type)}
          onClick={() => push("/list/comic/" + comic.type)}
        />
        {comic.genres.map((e, i) => (
          <Chip
            sx={{ m: 0.5 }}
            key={e.id}
            label={e.name}
            onClick={() => push("/list/genre/" + e.slug)}
          />
        ))}
      </Paper>
      <Grid container spacing={1} sx={{ mt: 2, p: 2 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Deskripsi</Typography>
            <Divider />
            <Typography variant="body1">{comic.description}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} xl={10}>
          <Paper sx={{ p: 2 }}>
            <Box display="flex" justifyContent={"space-between"}>
              <Typography variant="h5">Daftar Chapter</Typography>

              <Divider />
              <Box display="flex" gap={1}>
                <IconButton
                  color={sortMode == "desc" ? "primary" : undefined}
                  onClick={() =>
                    setSortMode(sortMode == "desc" ? "asc" : "desc")
                  }
                >
                  <SortIcon />
                </IconButton>
                <Divider orientation="vertical" />
                <IconButton
                  color={chapMode == "list" ? "primary" : undefined}
                  onClick={() => setChapMode("list")}
                >
                  <ListAlt />
                </IconButton>
                <IconButton
                  color={chapMode == "grid" ? "primary" : undefined}
                  onClick={() => setChapMode("grid")}
                >
                  <Bento />
                </IconButton>
              </Box>
            </Box>
            <TextField
              size="small"
              label="Cari Chapter"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />

            {chapMode == "list" ? (
              <List sx={{ maxHeight: 600, overflowY: "auto" }}>
                {loading && (
                  <RenderXTime x={20}>
                    <Box width="100%">
                      <Skeleton sx={{ height: 40 }} />
                    </Box>
                  </RenderXTime>
                )}
                {chaptersFiltered?.sort(sortFunction).map((e, i) => (
                  <Link key={i} href={`/chapter/${e.id}`}>
                    <a>
                      <ListItem key={i} disablePadding>
                        <ListItemButton>
                          <Box
                            display="flex"
                            justifyContent={"space-between"}
                            width="100%"
                          >
                            <Box display="flex" gap={1} alignItems={"center"}>
                              <RemoveRedEye />
                              <ListItemText primary={`Chapter ${e.name}`} />
                            </Box>
                            <Box display="flex" gap={1} alignItems={"center"}>
                              <AccessTime />
                              <ListItemText
                                primary={moment(e.createdAt).fromNow()}
                              />
                            </Box>
                          </Box>
                        </ListItemButton>
                      </ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            ) : (
              <Grid container spacing={2}>
                {loading && (
                  <RenderXTime x={20}>
                    <Grid item xs={6} md={3}>
                      <Skeleton
                        sx={{
                          height: 85,
                        }}
                      />
                    </Grid>
                  </RenderXTime>
                )}
                {chaptersFiltered?.sort(sortFunction).map((e, i) => (
                  <Grid key={i} item xs={6} md={3}>
                    <Link href={`/chapter/${e.id}`}>
                      <a>
                        <Paper
                          sx={{
                            p: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <IconButton>
                            <RemoveRedEye />
                          </IconButton>
                          <Typography textAlign="center" variant="body1">
                            Chapter {e.name}
                          </Typography>
                          <IconButton></IconButton>
                        </Paper>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3} xl={2}>
          <Paper
            sx={{ p: 2, display: "flex", gap: 2, flexDirection: "column" }}
          >
            <Typography variant="h5">Rekomendasi</Typography>
            <Divider />
            {top.map((e, i) => (
              <ComicCard {...e} key={e.id} layout="top" />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// };

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug as string;
  const { data: { findFirstComic } = {}, error: errorComic } =
    await client.query<{
      findFirstComic: Model["Comic"];
    }>({
      query: gql`
        query FindFirstComic($where: ComicWhereInput) {
          findFirstComic(where: $where) {
            id
            name
            thumb
            type
            thumbWide
            altName
            slug
            isHentai
            released
            rating
            views
            viewsWeek
            description
            age
            status
            concept
            lastChapterUpdateAt
            createdAt
            updatedAt
            authorId
            author {
              id
              name
              slug
            }
            genres {
              id
              name
              slug
            }
          }
        }
      `,
      variables: {
        where: {
          slug: {
            equals: slug,
          },
        },
      },
    });
  if (!findFirstComic && slug != undefined) {
    client
      .query({
        query: gql`
          mutation ReportMissingComic($data: String!, $context: String!) {
            reportMissing(data: $data, context: $context)
          }
        `,

        variables: {
          context: "comic",
          data: slug,
        },
      })
      .then(() => console.log(`404 comic ${slug}`));
  }

  if (findFirstComic?.id) {
    client.query({
      query: gql`
        mutation ReportViewComic($reportViewId: Int!, $context: String!) {
          reportView(id: $reportViewId, context: $context)
        }
      `,
      variables: {
        reportViewId: findFirstComic.id,
        context: "comic",
      },
    });
  }
  if (errorComic) {
    console.log(errorComic);
  }

  return {
    notFound: !findFirstComic,
    props: {
      comic: findFirstComic,
      top: [],
    },
    revalidate: 60 * 60, // 1 hours
  };
};

export async function getStaticPaths() {
  const { data: { findManyComic: comics } = {} } = await client.query<{
    findManyComic: Model["Comic"][];
  }>({
    query: gql`
      query FindAllComic {
        findManyComic {
          id
          name
          slug
        }
      }
    `,
  });

  // Get the paths we want to pre-render based on posts
  const paths =
    comics?.map((comic) => ({
      params: { slug: comic.slug },
    })) ?? [];

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default withRouter(Slug);
