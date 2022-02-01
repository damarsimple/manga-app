/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Paper,
  IconButton,
  Typography,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter, useRouter } from "next/router";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import {
  ChangeCircle,
  NavigateBefore,
  NavigateNext,
  Report,
  SkipPrevious,
} from "@mui/icons-material";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { client } from "../../modules/client";
import { Model } from "../../types";
import { NextSeo } from "next-seo";
import moment from "moment";
import { SEO } from "../../modules/seo";
function Id({ chapter }: { chapter: Model["Chapter"] }) {
  const { push } = useRouter();
  const comic: Model["Comic"] = chapter.comic as Model["Comic"];
  const title =
    "Komik " + comic.name + ` Chapter ${chapter.name} ` + SEO.padding;
  const [readMode, setReadMode] = useState<"single" | "longstrip">("single");
  const [imageIndex, setImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chapter) {
      if (chapter.comic.type != "manga") {
        setReadMode("longstrip");
      }

      chapter.imageUrls.forEach((e) => {
        const img = new Image();
        img.src = e;
      });
    }
  }, [chapter]);

  const Navigation = () =>
    readMode == "single" ? (
      <Paper sx={{ mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton onClick={prev}>
            <NavigateBefore />
          </IconButton>
          <Box>
            {imageIndex + 1}/{chapter.imageUrls.length}
          </Box>
          <IconButton onClick={next}>
            <NavigateNext />
          </IconButton>
        </Box>
      </Paper>
    ) : (
      <></>
    );

  const next = () => {
    if (imageIndex < chapter.imageUrls.length - 1) setImageIndex((i) => i + 1);
  };
  const prev = () => {
    if (imageIndex > 0) setImageIndex((i) => i - 1);
  };

  const Header = () => (
    <Paper sx={{ mb: 1 }}>
      <Box>
        <Typography textAlign={"center"} variant="h6" textTransform="uppercase">
          {title}
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <IconButton>
            <NavigateBefore />
          </IconButton>
          {/* <Typography
              textAlign={"center"}
              variant="body1"
              textTransform="uppercase"
            >
              Chapter 10
            </Typography> */}

          <FormControl fullWidth>
            <Select
              onChange={(e) => {
                push("/chapter/" + e.target.value);
              }}
              size="small"
              value={chapter.id}
            >
              <MenuItem value={chapter.id} selected>
                Chapter {chapter.name}
              </MenuItem>
              {comic.chapters
                .filter((e) => e.id != chapter.id)
                .map((e) => (
                  <MenuItem value={e.id} key={e.id}>
                    Chapter {e.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
  return (
    <Container>
      <NextSeo
        title={title}
        description={comic.description ?? ""}
        canonical={SEO.canonical + "/comic/" + comic.slug}
        openGraph={{
          url: SEO.canonical + "/comic/" + comic.slug,
          title: title,
          description: comic.description ?? "",
          type: "article",
          article: {
            publishedTime: moment(comic.createdAt).format(),
            modifiedTime: moment(comic.updatedAt).format(),
            //@ts-ignore
            authors: [SEO.canonical + "/list/author/" + comic.author.slug],
            //@ts-ignore
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
      <Header />
      <Navigation />
      <div ref={containerRef} />
      <Paper sx={{ mb: 1 }}>
        {readMode === "single" ? (
          <img
            src={chapter.imageUrls[imageIndex]}
            alt="comic"
            height={"100%"}
            width={"100%"}
            onClick={(e) => {
              //@ts-ignore
              var x = e.pageX - e.target.offsetLeft;
              //@ts-ignore
              if (x < e.target.width / 2) {
                //left
                prev();
              } else {
                //right
                next();
              }
            }}
          />
        ) : (
          <>
            {chapter.imageUrls.map((e, i) => (
              <img key={e} src={e} alt={title} height={"100%"} width={"100%"} />
            ))}
          </>
        )}
      </Paper>

      <Navigation />
      <Header />
      <Paper sx={{ mb: 1, p: 1, display: "flex", gap: 1 }}>
        <Button variant="contained" endIcon={<Report />}>
          LAPOR
        </Button>
        <Button
          variant="contained"
          endIcon={<ChangeCircle />}
          onClick={() => {
            setReadMode(readMode === "single" ? "longstrip" : "single");
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }}
        >
          UBAH MODE BACA
        </Button>
      </Paper>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { data: { findFirstChapter } = {}, error } = await client.query<{
    findFirstChapter: Model["Chapter"];
  }>({
    query: gql`
      query FindFirstChapter($where: ChapterWhereInput) {
        findFirstChapter(where: $where) {
          id
          name
          title
          comic {
            id
            name

            type
            chapters {
              id
              name
            }
            thumb
            description
            author {
              id
              name
            }
            genres {
              id
              name
              slug
            }
          }
          imageUrls
        }
      }
    `,
    variables: {
      where: {
        id: {
          equals: parseInt(id as string),
        },
      },
    },
  });

  return {
    props: {
      chapter: findFirstChapter,
    },
  };
};

export default Id;
