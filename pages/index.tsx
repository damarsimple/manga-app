import { Box, Divider, Grid, Paper, Typography, Chip } from "@mui/material";
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
import { ComicCard } from "../components/ComicCard";
import { client } from "../modules/client";
import { gql } from "@apollo/client";
import { Model } from "../types";
import { NextSeo } from "next-seo";
import { SEO } from "../modules/seo";

const Home = ({
  carousel,
  top,
  latest,
}: {
  top: Model["Comic"][];
  latest: Model["Comic"][];
  carousel: Model["Comic"][];
}) => {
  return (
    <Box p={2} display="flex" gap={2} flexDirection={"column"}>
      <NextSeo {...SEO} />
      <Paper sx={{ p: 4 }}>
        <Swiper
          pagination
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          style={{ paddingBottom: 30 }}
        >
          {carousel.map((e, i) => (
            <SwiperSlide key={i}>
              <ComicCard {...e} layout="carousel" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={9} md={10} display="flex" flexDirection="column">
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
                {latest.map((e, i) => (
                  <Grid item sm={12} lg={6} xl={4} key={i} width="100%">
                    <ComicCard {...e} layout="detailed" key={e.id} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>

          <Paper sx={{ p: 2, mt: 2 }}>
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
                {latest.map((e, i) => (
                  <Grid item sm={12} lg={6} xl={4} key={i} width="100%">
                    <ComicCard {...e} layout="detailed" key={e.id} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              TOP KOMIK
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              {top.map((e, i) => (
                <Grid item xs={6} sm={12} key={i} width="100%">
                  <ComicCard {...e} layout="top" isFirst={i == 0} key={e.id} />
                </Grid>
              ))}
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
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allowHentai = context.req.cookies.r18 == "enable" ?? false;
  const { data: { findManyComic: carousel } = {} } = await client.query<{
    findManyComic: Model["Comic"][];
  }>({
    query: gql`
      query CarouselComic(
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
    variables: {
      take: 10,
      chaptersTake2: 1,
      orderBy: {
        createdAt: "desc",
      },
      findManyComicOrderBy2: [
        {
          viewsWeek: "desc",
        },
      ],
      where: {
        isHentai: {
          equals: allowHentai,
        },
      },
    },
  });

  const { data: { findManyComic: top } = {} } = await client.query<{
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
        createdAt: "desc",
      },
      findManyComicOrderBy2: [
        {
          rating: "desc",
        },
      ],
      where: {
        isHentai: {
          equals: allowHentai,
        },
      },
    },
  });

  const { data: { findManyComic: latest } = {} } = await client.query<{
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
    variables: {
      take: 48,
      chaptersTake2: 3,
      orderBy: {
        createdAt: "desc",
      },
      findManyComicOrderBy2: [
        {
          lastChapterUpdateAt: "desc",
        },
      ],
      where: {
        isHentai: {
          equals: allowHentai,
        },
      },
    },
  });
  return {
    props: {
      carousel,
      top,
      latest,
    },
  };
};

export default Home;
