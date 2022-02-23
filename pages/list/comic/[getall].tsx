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
import { ComicCard, ComicCardSkeleton } from "../../../components/ComicCard";
import { useState } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { ComicSearch, Model } from "../../../types";
import { useR18 } from "../../../stores/r18";
import { capitalizeFirstLetter } from "../../../modules/helper";
import RenderMany from "../../../components/RenderMany";
import { FixedSizeList as List } from "react-window";

function Catch({ router }: WithRouterProps) {
  const { getall: get1, q } = useRouter().query;
  const get: string = get1 as string;
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
    setType(["manhwa", "manhua", "manga"].includes(get) ? get : undefined);
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
      query ComicSearchList(
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
        offset: page * limit,
        limit: limit,
        type: ["Search", "All", "Terbaru", "Hot", "Rekomendasi"].includes(
          type ?? ""
        )
          ? undefined
          : capitalizeFirstLetter(`${type ?? ""}`),
        allowHentai: hMode,
      },
      fetchPolicy: "network-only",
      onCompleted: () =>
        containerRef.current && containerRef.current.scrollIntoView(),
    }
  );

  const validType = mode == "Text Mode";

  const { data: { findManyComic: allComic } = {}, loading: loadingAllText } =
    useQuery<{
      findManyComic: Model["Comic"][];
    }>(
      gql`
        query FindManyComicTextMode($where: ComicWhereInput, $take: Int) {
          findManyComic(where: $where, take: $take) {
            id
            name
            slug
          }
        }
      `,
      {
        variables: {
          take: validType ? undefined : 0,
          // where: validType
          //   ? {
          //       type: {
          //         equals: capitalizeFirstLetter(`${type}`),
          //       },
          //     }
          //   : undefined,
        },
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

    allComic?.forEach((item) => {
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
        {mode != "Text Mode" && (
          <>
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
          </>
        )}

        {mode == "Card Mode" ? (
          <>
            <Grid
              spacing={1}
              container
              sx={{ pt: 2, px: { xs: undefined, md: 10 } }}
            >
              {loading ? (
                <RenderMany count={20}>
                  <Grid item xs={6} sm={3} lg={2}>
                    <ComicCardSkeleton layout="carousel" />
                  </Grid>
                </RenderMany>
              ) : (
                comicSearch?.comics.map((e, i) => (
                  <Grid item key={e.id} xs={6} sm={3} lg={2}>
                    <ComicCard layout="carousel" {...e} />
                  </Grid>
                ))
              )}
            </Grid>
          </>
        ) : (
          <Box>
            {Object.keys(sorted).map((e) => {
              return (
                <Box key={e} sx={{ mt: 2 }}>
                  <Typography variant="h5">{e}</Typography>
                  {loadingAllText ? (
                    <Skeleton width="100%" height={30} />
                  ) : (
                    <Grid container spacing={1} sx={{ mt: 2 }}>
                      {sorted[e].map((e, i) => (
                        <Grid item xs={6} sm={3} lg={2} key={e.id}>
                          <Link href={"/comic/" + e.slug}>
                            <a>
                              <Typography variant="body1">{e.name}</Typography>
                            </a>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  )}
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
