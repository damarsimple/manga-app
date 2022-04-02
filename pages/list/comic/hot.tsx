import React, { useState, useRef } from "react";
import {
  Paper,
  Box,
  Pagination,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import { useR18 } from "../../../stores/r18";
import { Comic } from "../../../types";
import { ComicCard } from "../../../components/ComicCard";

export default function Terbaru() {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useR18();
  const where = mode
    ? {}
    : {
        isHentai: {
          equals: false,
        },
      };

  const perPage = 48;
  const { data: { findManyComic } = {} } = useQuery<{
    findManyComic: Comic[];
  }>(
    gql`
      query FindManyComicQuery(
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
        take: perPage,
        chaptersTake2: 3,
        skip: page == 1 ? 0 : page * perPage,
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
    <Paper>
      <Box sx={{ p: 3 }} ref={containerRef}>
        <Typography variant="h5">Komik HOT</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          m: 3,
          gap: 2,
        }}
      >
        <Grid container spacing={3}>
          {findManyComic?.map((e, i) => (
            <Grid item sm={12} lg={3} xl={2} key={i} width="100%">
              <ComicCard {...e} layout="carousel" key={e.id} />
            </Grid>
          ))}
        </Grid>
        {findManyComic && (
          <>
            <Box>
              <Pagination
                onChange={(_, e) => {
                  setPage(e);
                  containerRef.current && containerRef.current.scrollIntoView();
                }}
                page={page}
                count={1000}
              />
            </Box>
          </>
        )}
      </Box>
    </Paper>
  );
}
