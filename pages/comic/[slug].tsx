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
} from "@mui/material";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { ComicSeo } from "../../components/Seo/Comic";
import Image from "next/image";
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
import { GetServerSideProps } from "next";
import { Model } from "../../types";
import { gql } from "@apollo/client";
import { client } from "../../modules/client";
import moment from "moment";
import { NextSeo } from "next-seo";
import { SEO } from "../../modules/seo";

interface SlugPageProps extends WithRouterProps {
  comic: Model["Comic"];
  top: Model["Comic"][];
}

function Slug({ top, router, comic }: SlugPageProps) {
  const [chapMode, setChapMode] = useState<"grid" | "list">("list");
  const { setTransparent, setTransparentMode } = useNavbarStore();

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
              bottom: 0,
              position: "absolute",
              color: "white",
              p: 16,
              display: "flex",
              gap: 2,
              flexDirection: {
                xs: "colurn",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={comic.thumb + "?width=240"}
                  height={320 / 1.2}
                  width={"100%"}
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
            xs: undefined,
            sm: "none",
          },
        }}
      >
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

            {chapMode == "list" ? (
              <List sx={{ maxHeight: 600, overflowY: "auto" }}>
                {comic.chapters
                  .sort((e, x) => x.name - e.name)
                  .map((e, i) => (
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
                {comic.chapters
                  .sort((e, x) => x.name - e.name)
                  .map((e, i) => (
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const allowHentai = context.req.cookies.r18 == "enable" ?? false;

  const where = allowHentai
    ? {}
    : {
        isHentai: {
          equals: false,
        },
      };

  const { data: { findManyComic: top } = {}, error: errorTop } =
    await client.query<{
      findManyComic: Model["Comic"][];
    }>({
      query: gql`
        query TopComic(
          $take: Int
          $chaptersTake2: Int
          $orderBy: ChapterOrderByWithRelationInput
          $findManyComicOrderBy2: [ComicOrderByWithRelationInput]
          $where: ComicWhereInput
        ) {
          findManyComic(
            take: $take
            orderBy: $findManyComicOrderBy2
            where: $where
          ) {
            id
            name
            thumb
            thumbWide
            slug
            rating
            isHentai
            author {
              id
              name
              slug
            }
            viewsWeek
            lastChapterUpdateAt
            genres {
              id
              name
              slug
            }
            chapters(take: $chaptersTake2, orderBy: $orderBy) {
              id
              name
              createdAt
            }
            _count {
              chapters
            }
          }
        }
      `,
      variables: {
        take: 10,
        chaptersTake2: 1,
        orderBy: {
          name: "desc",
        },
        findManyComicOrderBy2: [
          {
            rating: "desc",
          },
        ],
        where,
      },
    });

  const { data: { findFirstComic } = {}, error: errorComic } =
    await client.query<{
      findFirstComic: Model["Comic"];
    }>({
      query: gql`
        query FindFirstComic(
          $orderBy: ChapterOrderByWithRelationInput
          $where: ComicWhereInput
        ) {
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
            author {
              id
              name
              slug
            }
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
            genres {
              id
              name
              slug
            }
            chapters(orderBy: $orderBy) {
              id
              name
              createdAt
            }
          }
        }
      `,
      variables: {
        orderBy: {
          name: "desc",
        },
        where: {
          slug: {
            equals: slug,
          },
        },
      },
    });

  if (!findFirstComic) {
    console.log(`404 ${slug}`);
  }

  if (errorTop || errorComic) {
    console.log(errorTop);
    console.log(errorComic);
  }

  return {
    notFound: !findFirstComic,
    props: {
      comic: findFirstComic,
      top: top ?? [],
    },
  };
};

export default withRouter(Slug);
