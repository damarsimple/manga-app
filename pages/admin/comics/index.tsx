import React from "react";
import MUITable from "../../../components/MUITable";
import Dashboard from "../../../components/Wrapper/Dashboard";
import { gql } from "@apollo/client";
import { Model } from "../../../types";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <MUITable<Model["Comic"]>
        headcells={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "isHentai",
            label: "Hentai",
          },
          {
            name: "type",
            label: "Type",
          },

          {
            name: "views",
            label: "Views",
          },
          {
            name: "viewsHourly",
            label: "Views Hourly",
          },
          {
            name: "viewsDaily",
            label: "Views Daily",
          },
          {
            name: "viewsWeek",
            label: "Views Week",
          },
          {
            name: "lastChapterUpdateAt",
            label: "Last Update",
          },
        ]}
        name={"Comic"}
        keys={"findManyComic"}
        TooltipChildren={(row) => (
          <>
            <img src={row.thumb} height="400px" width="100%" alt={row.name} />
          </>
        )}
        countKeys={"findManyComicCount"}
        countQuery={gql`
          query Query {
            findManyComicCount
          }
        `}
        action={["edit", "delete"]}
        editPush={(row) => `/admin/comics/` + row.slug}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [ComicOrderByWithRelationInput]
            $where: ComicWhereInput
          ) {
            findManyComic(
              take: $take
              skip: $skip
              orderBy: $orderBy
              where: $where
            ) {
              id
              name
              slug
              thumb
              type
              thumbWide
              altName
              released
              isHentai
              rating
              views
              viewsHourly
              viewsDaily
              viewsWeek
              description
              status
              age
              concept
              lastChapterUpdateAt
              createdAt
              updatedAt
            }
          }
        `}
      />
    </>
  );
}
