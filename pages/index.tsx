/* eslint-disable @next/next/no-html-link-for-pages  */
import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  Pagination as PaginationMUI,
  Chip,
} from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
// import Swiper core and required modules

import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ComicCard, ComicCardSkeleton } from "../components/ComicCard";
import { client } from "../modules/client";
import { gql, useQuery } from "@apollo/client";
import { Model } from "../types";
import { NextSeo } from "next-seo";
import { SEO } from "../modules/seo";
import { useR18 } from "../stores/r18";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import RenderMany from "../components/RenderMany";
const Home = () => {
  const [page, setPage] = useState(0);
  const { mode } = useR18();
  const where = mode
    ? {}
    : {
        isHentai: {
          equals: false,
        },
      };

  const { push } = useRouter();

  const { data: { findManyGenre: genres } = {} } = useQuery<{
    findManyGenre: Model["Genre"][];
  }>(
    gql`
      query FindAllGenreHomepage($take: Int) {
        findManyGenre(take: $take) {
          id
          name
          slug
        }
      }
    `,
    {
      variables: {},
    }
  );

  const {
    data: { findManyComic: latest } = {},
    error: errorLatest,
    loading: loadingLatest,
  } = useQuery<{
    findManyComic: Model["Comic"][];
  }>(
    gql`
      query LatestComicHomepage(
        $take: Int
        $chaptersTake2: Int
        $skip: Int
        $orderBy: ChapterOrderByWithRelationInput
        $findManyComicOrderBy2: [ComicOrderByWithRelationInput]
        $where: ComicWhereInput
      ) {
        findManyComic(
          take: $take
          orderBy: $findManyComicOrderBy2
          where: $where
          skip: $skip
        ) {
          id
          name
          thumb
          thumbWide
          slug
          isHentai
          viewsWeek

          lastChapterUpdateAt
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
    {
      variables: {
        take: 42,
        chaptersTake2: 3,
        skip: page == 1 ? 0 : page * 42,
        orderBy: {
          name: "desc",
        },
        findManyComicOrderBy2: [
          {
            lastChapterUpdateAt: "desc",
          },
        ],
        where,
      },
    }
  );

  const {
    data: { findManyComic: recomendations } = {},
    loading: loadingRecomendations,
  } = useQuery<{
    findManyComic: Model["Comic"][];
  }>(
    gql`
      query RecomendationComicsHomepage(
        $take: Int
        $chaptersTake2: Int
        $skip: Int
        $orderBy: ChapterOrderByWithRelationInput
        $findManyComicOrderBy2: [ComicOrderByWithRelationInput]
        $where: ComicWhereInput
      ) {
        findManyComic(
          take: $take
          orderBy: $findManyComicOrderBy2
          where: $where
          skip: $skip
        ) {
          id
          name
          thumb
          thumbWide
          slug
          isHentai
          viewsWeek

          lastChapterUpdateAt
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
    {
      variables: {
        take: 24,
        chaptersTake2: 3,
        skip: page == 1 ? 0 : page * 24,
        orderBy: {
          name: "desc",
        },
        findManyComicOrderBy2: [
          {
            views: "desc",
          },
        ],
        where,
      },
    }
  );

  const {
    data: { findManyComic: top } = {},
    error: errorTop,
    loading: loadingTop,
  } = useQuery<{
    findManyComic: Model["Comic"][];
  }>(
    gql`
      query TopComicHomepage(
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
        }
      }
    `,
    {
      variables: {
        take: 13,
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
    }
  );

  const {
    data: { findManyComic: carousel } = {},
    error: errorCarousel,
    loading: loadingCarousel,
  } = useQuery<{
    findManyComic: Model["Comic"][];
  }>(
    gql`
      query CarouselComicHomepage(
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
          isHentai
          viewsWeek
          lastChapterUpdateAt
          chapters(take: $chaptersTake2, orderBy: $orderBy) {
            id
            name
            createdAt
          }
        }
      }
    `,
    {
      variables: {
        take: 10,
        chaptersTake2: 1,
        orderBy: {
          name: "desc",
        },
        findManyComicOrderBy2: [
          {
            viewsWeek: "desc",
          },
        ],
        where,
      },
    }
  );

  return (
    <Box p={2} display="flex" gap={2} flexDirection={"column"}>
      <NextSeo {...SEO} />
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" component="h3">
          KOMIK HOT
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Swiper
          pagination
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1768: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
          style={{ paddingBottom: 30 }}
        >
          {loadingCarousel ? (
            <>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
              <SwiperSlide>
                <ComicCardSkeleton layout="carousel" />
              </SwiperSlide>
            </>
          ) : (
            carousel?.map((e, i) => (
              <SwiperSlide key={i}>
                <Box sx={{ mr: 1 }}>
                  <ComicCard {...e} layout="carousel" home />
                </Box>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Paper>

      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              UPDATE KOMIK TERBARU
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              justifyContent="center"
              mx={{
                sm: 0.5,
                md: 1,
                lg: 3,
                xl: 4,
              }}
            >
              <Grid container spacing={3}>
                {loadingLatest ? (
                  <RenderMany count={10}>
                    <Grid item sm={12} lg={6} xl={4} width="100%">
                      <ComicCardSkeleton layout="detailed" />
                    </Grid>
                  </RenderMany>
                ) : (
                  latest?.map((e, i) => (
                    <Grid item sm={12} lg={6} xl={4} key={i} width="100%">
                      <ComicCard {...e} layout="detailed" key={e.id} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationMUI
                count={10}
                onChange={(_, v) => {
                  push("/?page=" + v);
                }}
              />
            </Box>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              KOMIK REKOMENDASI
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              justifyContent="center"
              mx={{
                sm: 0.5,
                md: 1,
                lg: 3,
                xl: 4,
              }}
            >
              <Grid container spacing={3}>
                {loadingRecomendations ? (
                  <RenderMany count={10}>
                    <Grid item sm={12} lg={6} xl={4} width="100%">
                      <ComicCardSkeleton layout="detailed" />
                    </Grid>
                  </RenderMany>
                ) : (
                  recomendations?.map((e, i) => (
                    <Grid item sm={12} lg={6} xl={4} key={i} width="100%">
                      <ComicCard {...e} layout="detailed" key={e.id} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationMUI
                count={10}
                onChange={(_, v) => {
                  push("/?page=" + v);
                }}
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              TOP KOMIK
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              {loadingTop ? (
                <RenderMany count={10}>
                  <Grid item xs={12} width="100%">
                    <ComicCardSkeleton layout="top" />
                  </Grid>
                </RenderMany>
              ) : (
                top?.map((e, i) => (
                  <Grid item xs={12} key={i} width="100%">
                    <ComicCard
                      {...e}
                      layout="top"
                      isFirst={i == 0}
                      key={e.id}
                    />
                  </Grid>
                ))
              )}

              <Grid item xs={6} sm={12} width="100%">
                <p>
                  RINGBET88 daftar 12 situs judi{" "}
                  <a href="https://carolesundfoundation.com/">
                    <strong>slot online</strong>
                  </a>{" "}
                  joker123 terpercaya di Indonesia degan games slot online
                  terlengkap, judi bola online terbaik yang ada di Indonesia,
                  judi online 24 jam non stop, proses deposit dan withdraw
                  instant.
                </p>
              </Grid>
              <Grid item xs={6} sm={12} width="100%">
                <p>
                  IGCPLAY Daftar 12 situs{" "}
                  <a href="https://172.104.60.132/">
                    <strong>judi online slot</strong>
                  </a>{" "}
                  terbaik dan terpercaya di Indonesia IGCPLAY, judi bola online
                  terbaik, situs judi online terpercaya, casino online resmi, 24
                  jam non stop di IGCPLAY.
                </p>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 2, mt: 1 }}>
            <Typography variant="h5" component="h3">
              DAFTAR GENRE
            </Typography>
            <Divider sx={{ my: 2 }} />
            {genres?.map((e, i) => (
              <Link href={`/list/genre/` + e.slug} key={e.id}>
                <a>
                  <Chip
                    label={e.name}
                    sx={{
                      margin: 0.5,
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Link>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const allowHentai = context.req.cookies.r18 == "enable" ?? false;
//   const { page: p } = context.query;
//   let page = parseInt((p as string) ?? "") ?? 1;

//   if (!page) page = 1;

//   const where = allowHentai
//     ? {}
//     : {
//         isHentai: {
//           equals: false,
//         },
//       };

//   return {

//   };
// };

export default Home;
