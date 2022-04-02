/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";
import { gkChannel } from "../../../modules/gkInteractor";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dashboard from "../../../components/Wrapper/Dashboard";
import {
  Button,
  Grid,
  Paper,
  Box,
  Stack,
  Chip,
  TextField,
  Modal,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  capitalize,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Tabs,
  Tab,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Comic, Genre } from "../../../types";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Add, Edit, PanoramaFishEye, RemoveRedEye } from "@mui/icons-material";
import MUITable from "../../../components/MUITable";

export default function Slug() {
  const { push, query } = useRouter();
  const { slug } = query;
  const [updateType, setUpdateType] = useState<"thumb" | "thumbWide">("thumb");

  const path = `/${slug}/${updateType}.jpg`;

  const [OpenThumbUpdate, setOpenThumbUpdate] = useState(false);

  const [updateMethod, setUpdateMethod] = useState<null | "url" | "file">(null);

  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { data: { findFirstComic: comic } = {}, refetch } = useQuery<{
    findFirstComic: Comic;
  }>(
    gql`
      query FindAdminSlugComicHomepage($where: ComicWhereInput) {
        findFirstComic(where: $where) {
          id
          name
          slug
          thumb
          altName
          isHentai
          released
          thumbWide
          type
          rating
          views
          viewsWeek
          description
          status
          age
          concept
          lastChapterUpdateAt
          createdAt
          updatedAt
          authorId
          genres {
            id
            slug
            name
          }
        }
      }
    `,
    {
      variables: {
        where: {
          slug: {
            equals: slug,
          },
        },
      },
    }
  );

  const comicsGenres = comic?.genres.map((e) => e.name) || [];

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
    `,
    {
      onCompleted: () => {
        toast.info(`comic ${slug} successfully updated`);
        refetch();
      },
    }
  );

  const handleUpdateComic = useCallback(
    (data: any) => {
      handle({
        variables: {
          where: {
            slug,
          },
          data,
        },
      });
    },
    [handle, slug]
  );

  const [rng, setRng] = useState("");

  const addGenre = (slug: string) => {
    handleUpdateComic({
      genres: {
        connect: [
          {
            slug,
          },
        ],
      },
    });
  };

  const deleteGenre = (slug: string) => {
    handleUpdateComic({
      genres: {
        disconnect: [
          {
            slug,
          },
        ],
      },
    });
  };

  const { data: { findManyGenre } = {} } = useQuery<{
    findManyGenre: Genre[];
  }>(gql`
    query FindAllGenreAdmin {
      findManyGenre {
        id
        slug
        name
      }
    }
  `);

  const [searchGenre, setSearchGenre] = useState("");

  const [handleChangeThumb] = useMutation<{ uploadFile: boolean }>(gql`
    mutation UploadFile($file: Upload, $path: String!) {
      uploadFile(file: $file, path: $path)
    }
  `);

  const handleUpdateThumb = async () => {
    toast.info(`Downloading ${updateType}`);
    setLoading(true);
    let data: File;
    if (updateMethod == "file") {
      if (!file) {
        setLoading(false);
        return;
      }
      data = file;
    } else {
      try {
        // check if user input valid url or not
        new URL(url);

        let f = await fetch(url);
        let blob = await f.blob();

        data = new File([blob], "thumb.jpg");
      } catch (error) {
        toast.error("Failed to download images ... " + error);
        setLoading(false);
        return;
      }
    }

    const variables = {
      file: data,
      path,
    };

    console.log(variables);

    handleChangeThumb({
      variables,
    })
      .then(({ data }) => {
        if (data?.uploadFile) {
          setOpenThumbUpdate(false);

          handleUpdateComic({
            [updateType]: {
              set: `https://cdn.gudangkomik.com${path}`,
            },
          });

          toast.success("Berhasil mengupload gambar ke server gudangkomik");

          setTimeout(() => {
            setRng(`${new Date().getTime()}`);
            setLoading(false);
          }, 1000);
        }
      })
      .catch((e) => {
        toast.error(e.message);
        setLoading(false);
      });
  };

  type Keys = keyof Comic;

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Dashboard>
      <Modal open={OpenThumbUpdate} onClose={() => setOpenThumbUpdate(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pilih Sumber Gambar
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sumber Gambar</InputLabel>
            <Select
              value={updateMethod}
              label="Sumber Gambar"
              onChange={(e) => setUpdateMethod(e.target.value as any)}
            >
              <MenuItem value={"file"}>File</MenuItem>
              <MenuItem value={"url"}>URL</MenuItem>
            </Select>
          </FormControl>

          {updateMethod == "file" && (
            <>
              <input
                name="url"
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
              />
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Staging IMG"
                  style={{ margin: 10 }}
                />
              )}
            </>
          )}
          {updateMethod == "url" && (
            <TextField
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          )}

          <Button fullWidth disabled={loading} onClick={handleUpdateThumb}>
            Upload
          </Button>
        </Box>
      </Modal>
      <Paper>
        <Tabs value={tabIndex} onChange={(_, v) => setTabIndex(v)}>
          <Tab label="Info" />
          <Tab label="Genre" />
          <Tab label="Chapter" />
        </Tabs>
      </Paper>
      {tabIndex == 0 && (
        <Paper sx={{ minHeight: 600, p: 4, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={3} sm={4}>
              <Box p={4} sx={{ display: "flex", flexDirection: "column" }}>
                {!loading && (
                  <img
                    src={`${comic?.thumb}?t=${rng}`}
                    alt={comic?.name}
                    style={{ margin: 10 }}
                  />
                )}

                <Button
                  onClick={() => {
                    setOpenThumbUpdate(true);
                    setUpdateType("thumb");
                  }}
                >
                  UPDATE THUMBNAIL
                </Button>
                <Button
                  onClick={() => {
                    setOpenThumbUpdate(true);
                    setUpdateType("thumbWide");
                  }}
                >
                  UPDATE WIDE THUMBNAIL
                </Button>
              </Box>
            </Grid>
            <Grid item xs={9} sm={8}>
              {comic && (
                <Formik<Partial<Comic>>
                  validationSchema={Yup.object({
                    name: Yup.string().required(),
                  })}
                  initialValues={comic}
                  onSubmit={(values) => {
                    const data: any = {};

                    for (const key in values) {
                      //@ts-ignore
                      const type = typeof values[key];

                      if (
                        [
                          "__typename",
                          "id",
                          "authorId",
                          "name",
                          "slug",
                        ].includes(key)
                      )
                        continue;

                      if (["boolean", "string", "number"].includes(type)) {
                        data[key] = {
                          //@ts-ignore
                          set: values[key],
                        };
                      }
                    }
                    handleUpdateComic(data);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <Box
                      component="form"
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexDirection: "column",
                      }}
                      onSubmit={handleSubmit}
                    >
                      {(
                        [
                          "thumb",
                          "thumbWide",
                          "type",
                          "description",
                          "status",
                          "age",
                          "concept",
                        ] as Keys[]
                      ).map((e) => (
                        <TextField
                          key={e}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label={e}
                          name={e}
                          helperText={errors[e]}
                          error={!!errors[e]}
                          value={values[e]}
                        />
                      ))}

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox defaultChecked={values["isHentai"]} />
                          }
                          label="Kono Hentai?"
                        />
                      </FormGroup>
                      {(
                        ["released", "rating", "views", "viewsWeek"] as Keys[]
                      ).map((e) => (
                        <TextField
                          key={e}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label={e}
                          name={e}
                          helperText={errors[e]}
                          error={!!errors[e]}
                          value={values[e]}
                          type="number"
                        />
                      ))}
                      {/* {(
                      ["lastChapterUpdateAt", "createdAt", "updatedAt"] as Keys
                    ).map((e) => (
                      <input
                        key={e}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label={e}
                        name={e}
                        value={values[e]}
                        type="date"
                      />
                    ))} */}
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={loading}
                      >
                        SIMPAN
                      </Button>
                    </Box>
                  )}
                </Formik>
              )}
            </Grid>
          </Grid>

          {!loading && comic?.thumbWide && (
            <img
              src={`${comic?.thumbWide}?t=${rng}`}
              alt={comic?.name}
              style={{ margin: 10 }}
            />
          )}
        </Paper>
      )}
      {/* {tabIndex == 2 && <MUITable />} */}
      {tabIndex == 1 && (
        <Paper>
          <Box
            p={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                  }}
                >
                  <Typography variant="h5">Tambah </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    label="Cari Genre"
                    value={searchGenre}
                    onChange={(e) => {
                      setSearchGenre(e.target.value);
                    }}
                  />
                </Box>
                <Box sx={{ maxHeight: 700, overflowY: "auto" }}>
                  {findManyGenre
                    ?.filter(
                      (genre) =>
                        genre.name.toLowerCase().includes(searchGenre) &&
                        !comicsGenres.includes(genre.name)
                    )
                    .map((e) => (
                      <Chip
                        key={e.id}
                        label={e.name}
                        onDelete={() => {
                          addGenre(e.slug);
                        }}
                        sx={{ m: 1 }}
                        deleteIcon={<Add />}
                      />
                    ))}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                  }}
                >
                  <Typography variant="h5">Kurang </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    label="Cari Genre"
                    value={searchGenre}
                    onChange={(e) => {
                      setSearchGenre(e.target.value);
                    }}
                  />
                </Box>
                <Box sx={{ maxHeight: 700, overflowY: "auto" }}>
                  {comic?.genres
                    ?.filter((genre) =>
                      genre.name.toLowerCase().includes(searchGenre)
                    )
                    .map((e) => (
                      <Chip
                        key={e.id}
                        label={e.name}
                        onDelete={() => {
                          deleteGenre(e.slug);
                        }}
                        sx={{ m: 1 }}
                      />
                    ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      )}
    </Dashboard>
  );
}
