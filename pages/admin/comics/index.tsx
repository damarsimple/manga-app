import React, { useState } from "react";
import MUITable from "../../../components/MUITable";
import Dashboard from "../../../components/Wrapper/Dashboard";
import { gql, useMutation } from "@apollo/client";
import { Model } from "../../../types";
import Image from "next/image";
import {
  Tabs,
  Tab,
  Paper,
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { toast } from "react-toastify";
import { useCallback } from "react";
import { Delete, Newspaper, Upload, UploadFile } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

export default function Index() {
  const [tab, setTab] = useState(0);

  const [candidates, setCandidates] = useState<
    {
      slug: string;
      data?: string;
      file?: File;
      type: "File" | "String";
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const [finished, setFinished] = useState<string[]>([]);

  const [handleChangeThumb] = useMutation<{ uploadFile: boolean }>(gql`
    mutation UploadFile($file: Upload, $path: String!) {
      uploadFile(file: $file, path: $path)
    }
  `);

  const [handle] = useMutation(
    gql`
      mutation UpdateOneComicAdmin(
        $data: ComicUpdateInput!
        $where: ComicWhereUniqueInput!
      ) {
        updateOneComic(data: $data, where: $where) {
          id
          name
        }
      }
    `
  );

  const handleUpdateComic = useCallback(
    (data: any, slug: string) => {
      handle({
        variables: {
          where: {
            slug,
          },
          data,
        },
      });
    },
    [handle]
  );

  const [updateType, setUpdateType] = useState<"thumb" | "thumbWide">("thumb");

  const handleMassDownload = async () => {
    setLoading(true);
    const finishedDls: string[] = [];
    for (const candidate of candidates) {
      let data: File;

      if (candidate.type == "String") {
        try {
          if (!candidate.data) {
            toast.error("You didnt input any url ! " + candidate.slug);
            return;
          }

          // check if user input valid url or not
          new URL(candidate.data);

          let f = await fetch(candidate.data);
          let blob = await f.blob();

          data = new File([blob], "thumb.jpg");
        } catch (error) {
          toast.error(
            "Failed to download images ... try other link or just upload file 🤷‍♂️ duh " +
              error
          );
          setLoading(false);
          return;
        }
      } else {
        if (!candidate.file) {
          toast.error("You didnt select any file ! " + candidate.slug);
          return;
        }

        data = candidate.file;
      }
      const path = `/${candidate.slug}/${updateType}.jpg`;

      await handleChangeThumb({
        variables: {
          file: data,
          path,
        },
      }).then(async ({ data }) => {
        const { uploadFile } = data || {};

        if (uploadFile) {
          finishedDls.push(candidate.slug);
          toast.success("Successfully downloaded " + candidate.slug);

          await handleUpdateComic(
            {
              [updateType]: {
                set: `https://cdn.gudangkomik.com${path}`,
              },
            },
            candidate.slug
          );
        }
      });
    }

    setFinished(finishedDls);

    setLoading(false);
  };

  const [colomAdd, setColomAdd] = useState(1);

  const handleAdd = () => {
    setCandidates([
      ...Array(colomAdd).fill({ slug: "", data: "", type: "String" }),
    ]);
  };

  return (
    <>
      <Paper sx={{ p: 6 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Daftar Comic" />
          <Tab label="Mass Thumb Update" />
        </Tabs>

        {tab == 1 && (
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mt: 4 }}>
            <Select
              sx={{ width: "30%" }}
              value={updateType}
              onChange={(e) => {
                setUpdateType(e.target.value as any);
              }}
            >
              <MenuItem value={"thumb"}>Thumbnail</MenuItem>
              <MenuItem value={"thumbWide"}>Wide Thumbnail</MenuItem>
            </Select>
            {candidates.map((candidate, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  label="Slug"
                  onChange={(e) =>
                    setCandidates(
                      candidates.map((c, i) =>
                        i == index ? { ...c, slug: e.target.value } : c
                      )
                    )
                  }
                />

                {candidate.type == "String" ? (
                  <TextField
                    fullWidth
                    label="URL"
                    onChange={(e) =>
                      setCandidates(
                        candidates.map((c, i) =>
                          i == index ? { ...c, data: e.target.value } : c
                        )
                      )
                    }
                  />
                ) : candidate.file ? (
                  <label
                    htmlFor="contained-button-file"
                    style={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {candidate.file.name}
                  </label>
                ) : (
                  <label
                    htmlFor="contained-button-file"
                    style={{ width: "50%" }}
                  >
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file)
                          setCandidates(
                            candidates.map((c, i) =>
                              i == index ? { ...c, file } : c
                            )
                          );
                      }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      fullWidth
                      sx={{
                        height: "100%",
                      }}
                    >
                      Upload
                    </Button>
                  </label>
                )}
                <IconButton
                  onClick={() => {
                    setCandidates(
                      candidates.map((c, i) =>
                        i == index
                          ? {
                              ...c,
                              type:
                                candidate.type == "File" ? "String" : "File",
                            }
                          : c
                      )
                    );
                  }}
                >
                  {candidate.type == "File" ? <Upload /> : <Newspaper />}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setCandidates(candidates.filter((c, i) => i != index));
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}
            <Box sx={{ display: "flex" }}>
              <Select
                sx={{ width: "10%" }}
                value={colomAdd}
                onChange={(e) => {
                  setColomAdd(parseInt(e.target.value as string));
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>

              <Button
                onClick={handleAdd}
                variant="contained"
                sx={{ width: "90%" }}
              >
                Tambah Kolom
              </Button>
            </Box>

            <Button
              onClick={handleMassDownload}
              variant="contained"
              sx={{ width: "90%" }}
            >
              PATCH THUMBNAIL
            </Button>
          </Box>
        )}

        {tab == 0 && (
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
                <img
                  src={row.thumb}
                  height="400px"
                  width="100%"
                  alt={row.name}
                />
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
        )}
      </Paper>
    </>
  );
}
