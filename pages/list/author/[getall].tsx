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

interface AuthorPageProps extends WithRouterProps {
  authors: Model["Author"][];
  comics: Model["Comic"][];
}

function Catch({ comics, authors, router }: AuthorPageProps) {
  const { getall, q } = router.query;

  const getSortedObject = () => {
    const a = 65;
    const z = 91;

    const map: Record<string, Model["Author"][]> = {};
    map["*"] = [];

    for (let i = a; i <= z; i++) {
      map[String.fromCharCode(i)] = [];
    }

    authors.forEach((item) => {
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
            Daftar Komik Author {(getall as string)?.toUpperCase()}
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
                        <Link href={"/list/author/" + e.slug}>
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
              context="author"
              comics={comics ?? []}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allowHentai = context.req.cookies.r18 == "enable" ?? false;

  const where = allowHentai
    ? {}
    : {
        isHentai: {
          equals: false,
        },
      };

  const { getall, q, all, type } = context.query;
  if (type) {
    //@ts-ignore
    where.type = {
      equals: type,
    };
  }
  let authors: Model["Author"][] = [];
  let comics: Model["Comic"][] = [];

  if (getall == "all" || all == "true") {
    await client
      .query<{
        findManyAuthor: Model["Author"][];
      }>({
        query: gql`
          query FindAllAuthor($take: Int) {
            findManyAuthor(take: $take) {
              id
              name
              slug
            }
          }
        `,
      })
      .then(({ data }) => {
        authors = data.findManyAuthor;
      });
  } else {
    await client
      .query<{
        findFirstAuthor: Model["Author"];
      }>({
        query: gql`
          query FindFirstAuthor(
            $where: AuthorWhereInput
            $take: Int
            $chaptersTake2: Int
            $comicsWhere2: ComicWhereInput
          ) {
            findFirstAuthor(where: $where) {
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
          take: all == "true" ? 99999 : 24,
          where: {
            slug: {
              equals: getall,
            },
          },
          comicsWhere2: {
            name: {
              contains: q ?? undefined,
            },
            ...where,
          },

          chaptersTake2: 1,
        },
      })
      .then(({ data }) => {
        comics = (data.findFirstAuthor.comics ?? []) as Model["Comic"][];
      });
  }

  return {
    props: {
      authors,
      comics,
    },
  };
};

export default withRouter(Catch);
