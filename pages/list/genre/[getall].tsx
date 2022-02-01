import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import React from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import { ComicCard } from "../../../components/ComicCard";
import { useState } from "react";
import Link from "next/link";
import { Model } from "../../../types";
import { client } from "../../../modules/client";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import SearchComicContainer from "../../../components/SearchComicContainer";

interface GenrePageProps extends WithRouterProps {
  genres: Model["Genre"][];
  comics: Model["Comic"][];
}

function Catch({ comics, genres, router }: GenrePageProps) {
  const { getall, q } = router.query;

  const getSortedObject = () => {
    const a = 65;
    const z = 91;

    const map: Record<string, Model["Genre"][]> = {};
    map["*"] = [];

    for (let i = a; i <= z; i++) {
      map[String.fromCharCode(i)] = [];
    }

    genres.forEach((item) => {
      const firstLetter = item.name.charAt(0).toUpperCase();

      if (!map[firstLetter]) {
        map["*"].push(item);
      } else {
        map[firstLetter].push(item);
      }
    });

    return map;
  };

  const sorted = getSortedObject();

  return (
    <Box sx={{ m: 1 }}>
      <Paper sx={{ p: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">
            Daftar Komik Genre {(getall as string)?.toUpperCase()}
          </Typography>
        </Box>
        <Box>
          {getall == "all" ? (
            Object.keys(sorted).map((e) => {
              return (
                <Box key={e} sx={{ mt: 2 }}>
                  <Typography variant="h5">{e}</Typography>
                  <Grid container spacing={1} sx={{ mt: 2 }}>
                    {sorted[e].map((e, i) => (
                      <Grid item xs={6} sm={3} lg={2} key={e.id}>
                        <Link href={"/list/genre/" + e.slug}>
                          <a>
                            <Typography variant="body1">{e.name}</Typography>
                          </a>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })
          ) : (
            <SearchComicContainer
              query={q as string}
              title={getall as string}
              context="genre"
              comics={comics}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allowHentai = context.req.cookies.r18 == "enable" ?? false;
  const { getall, q } = context.query;

  let genres: Model["Genre"][] = [];
  let comics: Model["Comic"][] = [];

  if (getall == "all") {
    await client
      .query<{
        findManyGenre: Model["Genre"][];
      }>({
        query: gql`
          query FindManyGenre($take: Int) {
            findManyGenre(take: $take) {
              id
              name
              slug
            }
          }
        `,
      })
      .then(({ data }) => {
        genres = data.findManyGenre;
      });
  } else {
    await client
      .query<{
        findFirstGenre: Model["Genre"];
      }>({
        query: gql`
          query findFirstGenre(
            $where: GenreWhereInput
            $take: Int
            $chaptersTake2: Int
            $comicsWhere2: ComicWhereInput
          ) {
            findFirstGenre(where: $where) {
              id
              name
              comics(take: $take, where: $comicsWhere2) {
                id
                name
                thumb
                slug
                chapters(take: $chaptersTake2) {
                  id
                  name
                  createdAt
                }
              }
            }
          }
        `,
        variables: {
          take: 10,
          where: {
            slug: {
              equals: getall,
            },
          },
          comicsWhere2: {
            name: {
              contains: q ?? undefined,
            },
          },

          chaptersTake2: 1,
        },
      })
      .then(({ data }) => {
        comics = data.findFirstGenre.comics as Model["Comic"][];
      });
  }

  return {
    props: {
      genres,
      comics,
    },
  };
};

export default withRouter(Catch);
