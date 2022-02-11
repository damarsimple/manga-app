import { WithRouterProps } from "next/dist/client/with-router";
import { useRouter, withRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Chip,
  TextField,
  Pagination,
  Skeleton,
} from "@mui/material";
import { ComicCard } from "../../../components/ComicCard";
import { useState } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { SEO } from "../../../modules/seo";
import { client } from "../../../modules/client";
import { GetServerSideProps } from "next";
import { gql, useQuery } from "@apollo/client";
import { ComicSearch, Model } from "../../../types";
import SearchComicContainer from "../../../components/SearchComicContainer";
import { useR18 } from "../../../stores/r18";
import { capitalizeFirstLetter } from "../../../modules/helper";

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1);
};

function Catch({ router }: WithRouterProps) {
  const { getall: get, q } = useRouter().query;
  const containerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState("Card Mode");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { push } = router;
  const { mode: hMode } = useR18();
  const limit = 24;
  const [type, setType] = useState<undefined | string>(
    capitalizeFirstLetter(`${get ?? ""}`)
  );

  useEffect(() => {
    setMode(get == "all" ? "Text Mode" : "Card Mode");
  }, [get]);

  const queryCannon = query.length > 0 ? query : q ?? "";

  const {
    data: { comicSearch } = {},
    loading,
    error,
  } = useQuery<{
    comicSearch: ComicSearch;
  }>(
    gql`
      query ComicSearch(
        $query: String!
        $offset: Int
        $limit: Int
        $type: String
        $allowHentai: Boolean
      ) {
        comicSearch(
          query: $query
          offset: $offset
          limit: $limit
          type: $type
          allowHentai: $allowHentai
        ) {
          comics {
            id
            name
            slug
            thumb
            type
            thumbWide
            altName
            isHentai
            released
            rating
            views
            viewsWeek
          }
          offset
          limit
          processingTimeMs
          total
          exhaustiveNbHits
        }
      }
    `,
    {
      variables: {
        query: `${queryCannon}`,
        offset: mode == "Text Mode" ? 0 : page == 1 ? 0 : page * limit,
        limit: mode == "Text Mode" ? 10000 : limit,
        type: ["Search", "All"].includes(type ?? "")
          ? undefined
          : capitalizeFirstLetter(`${type ?? ""}`),
        allowHentai: hMode,
      },
      fetchPolicy: "network-only",
      onCompleted: () =>
        containerRef.current && containerRef.current.scrollIntoView(),
    }
  );

  const getSortedObject = () => {
    const a = 65;
    const z = 91;

    const map: Record<string, Model["Comic"][]> = {};
    map["*"] = [];

    for (let i = a; i <= z; i++) {
      map[String.fromCharCode(i)] = [];
    }

    comicSearch?.comics.forEach((item) => {
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

  const PaginationComponent = () => (
    <Box
      sx={{
        height: 600,
        width: "100%",
      }}
    >
      {[...Array(Math.floor(600 / 30))].map((e, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          width={"100%"}
          height={30}
          sx={{ mt: 1 }}
        />
      ))}
    </Box>
  );

  return (
    <Box sx={{ m: 1 }} ref={containerRef}>
      {/* <NextSeo {...SEO} title={"Daftar Komik " + title} /> */}
      <Paper sx={{ p: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Daftar Komik</Typography>
        </Box>
        <>
          <Divider sx={{ my: 1 }} />
          {["Manga", "Manhwa", "Manhua"].map((e) => (
            <Chip
              label={e}
              key={e}
              sx={{ mx: 0.2 }}
              color={e == type ? "primary" : "secondary"}
              onClick={() => {
                setType(e == type ? undefined : e);
              }}
            />
          ))}
          <Divider sx={{ my: 1 }} />
          {["Card Mode", "Text Mode"].map((e) => (
            <Chip
              label={e}
              key={e}
              sx={{ mx: 0.2 }}
              color={e == mode ? "primary" : "secondary"}
              onClick={() => {
                setMode(e);
              }}
            />
          ))}
          <Divider sx={{ my: 1 }} />
        </>
        <TextField
          label="Cari Komik"
          size="small"
          fullWidth
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />

        <Divider sx={{ my: 1 }} />
        {loading ? (
          <PaginationComponent />
        ) : mode == "Card Mode" ? (
          <>
            <Grid
              spacing={1}
              container
              sx={{ pt: 2, px: { xs: undefined, md: 10 } }}
            >
              {comicSearch?.comics.map((e, i) => (
                <Grid item key={e.id} xs={6} sm={3} lg={2}>
                  <ComicCard layout="carousel" {...e} />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Box>
            {Object.keys(sorted).map((e) => {
              return (
                <Box key={e} sx={{ mt: 2 }}>
                  <Typography variant="h5">{e}</Typography>
                  <Grid container spacing={1} sx={{ mt: 2 }}>
                    {(!hMode
                      ? sorted[e].filter((e) => !e.isHentai)
                      : sorted[e]
                    ).map((e, i) => (
                      <Grid item xs={6} sm={3} lg={2} key={e.id}>
                        <Link href={"/comic/" + e.slug}>
                          <a>
                            <Typography variant="body1">
                              {e.name.replace("<em>", "").replace("</em>", "")}
                            </Typography>
                          </a>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })}
          </Box>
        )}

        {comicSearch?.comics.length == 0 && (
          <Typography textAlign="center" variant="h5">
            Komik `{queryCannon}` tidak ditemukan{" "}
          </Typography>
        )}

        {!loading && comicSearch && (
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
            <Box>
              <Pagination
                onChange={(_, e) => {
                  setPage(e);
                }}
                page={page}
                count={Math.floor(comicSearch.total / comicSearch.limit)}
              />
            </Box>
            <Box>
              <Typography>
                menampilkan{" "}
                {`${comicSearch.limit} komik dari ${comicSearch.total} ditemukan`}
              </Typography>
            </Box>
            <Typography>
              diproses dalam {comicSearch.processingTimeMs} ms
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default withRouter(Catch);
