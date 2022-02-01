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
import { NextSeo } from "next-seo";
import { SEO } from "../../../modules/seo";
import { client } from "../../../modules/client";
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { Model } from "../../../types";
import SearchComicContainer from "../../../components/SearchComicContainer";

interface GetPageProp extends WithRouterProps {
  result: Model["Comic"][];
}

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1);
};

function Catch({ result, router }: GetPageProp) {
  const { getall, q } = router.query;
  const { push } = router;

  return (
    <SearchComicContainer
      title={getall as string}
      query={q as string}
      comics={result}
      context="comic"
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allowHentai = context.req.cookies.r18 == "enable" ?? false;
  const { getall, q } = context.query;

  let query = gql`
    query Search(
      $take: Int
      $where: ComicWhereInput
      $chaptersTake2: Int
      $orderBy: [ComicOrderByWithRelationInput]
    ) {
      findManyComic(take: $take, where: $where, orderBy: $orderBy) {
        id
        slug
        name
        chapters(take: $chaptersTake2) {
          id
          name
          createdAt
        }
        thumb
      }
    }
  `;

  const variables: any = {
    where: {
      isHentai: {
        equals: allowHentai,
      },
      name: {
        contains: q ?? undefined,
      },
      type: {},
    },
    take: 18,
    chaptersTake2: 1,
  };

  if (getall == "all") {
    variables.take = 9999999;
    variables.chaptersTake2 = undefined;
    query = gql`
      query Search(
        $take: Int
        $where: ComicWhereInput
        $orderBy: [ComicOrderByWithRelationInput]
      ) {
        findManyComic(take: $take, where: $where, orderBy: $orderBy) {
          id
          slug
          name
        }
      }
    `;
  }

  switch (getall) {
    case "manga":
    case "manhwa":
    case "manhua":
      variables.where.type = {
        equals: getall,
      };
      break;
    case "all":
      variables.take = 9999999;
      break;
    case "rekomendasi":
      // implement recomendation ....
      // variables.take = 9999999;
      break;
    case "terbaru":
      variables.orderBy = [
        {
          createdAt: "desc",
        },
      ];
      break;
    default:
      break;
  }

  const { data: { findManyComic: result } = {} } = await client.query<{
    findManyComic: Model["Comic"][];
  }>({
    query,
    variables,
  });
  return {
    props: {
      result,
    },
  };
};

export default withRouter(Catch);
