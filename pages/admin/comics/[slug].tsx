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
import { Model } from "../../../types";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Add, Edit, PanoramaFishEye, RemoveRedEye } from "@mui/icons-material";

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
    findFirstComic: Model["Comic"];
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
          chapters {
            id
            name
            views
          }
          _count {
            chapters
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

  useEffect(() => {
    gkChannel.onmessage = (e) => {
      if (e.data.command == "done") {
        toast.info(`Command ${e.data.payload.data} Finished`);
        setRng(`${new Date().getTime()}`);
        setLoading(false);
      }
    };

    return () => {
      gkChannel.onmessage = null;
    };
  }, []);

  const { data: { findManyGenre } = {} } = useQuery<{
    findManyGenre: Model["Genre"][];
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

  const handleUpdateThumb = async () => {
    toast.info(`Downloading ${updateType}`);
    setLoading(true);
    if (updateMethod == "file") {
      gkChannel.postMessage({
        command: "upload",
        payload: {
          file: await file?.arrayBuffer(),
          path,
        },
      });
    } else {
      gkChannel.postMessage({
        command: "downloadAndUpload",
        payload: {
          url,
          path,
        },
      });
    }
    setOpenThumbUpdate(false);

    handleUpdateComic({
      [updateType]: {
        set: `https://cdn.gudangkomik.com${path}`,
      },
    });
  };

  type Keys = keyof Model["Comic"];

  const [tabIndex, setTabIndex] = useState(0);

  // chapter
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: number) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: number) => selected.indexOf(name) !== -1;

  const rows = comic?.chapters || [];

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [handleDeleteChapters] = useMutation(gql`
    mutation DeleteManyChapterAdmin($where: ChapterWhereInput) {
      deleteManyChapter(where: $where) {
        count
      }
    }
  `);

  const handleSelectedDelete = () => {
    toast.info(`${selected.length} chapters will be deleted`);

    handleDeleteChapters({
      variables: {
        where: {
          id: {
            in: selected,
          },
        },
      },
    });

    setSelected([]);
  };
  // end chapter

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
        <Paper sx={{ minHeight: 600, p: 4 }}>
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
                <Formik<Partial<Model["Comic"]>>
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
      {tabIndex == 2 && (
        <Paper sx={{ p: 1 }}>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <EnhancedTableToolbar
                numSelected={selected.length}
                handleSelectedDelete={handleSelectedDelete}
              />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={"small"}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {[...rows]
                      .sort((a, b) =>
                        order == "asc"
                          ? //@ts-ignore
                            b[orderBy] - a[orderBy]
                          : //@ts-ignore
                            a[orderBy] - b[orderBy]
                      )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                              />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row">
                              {row.views}
                            </TableCell>

                            <TableCell component="th" id={labelId} scope="row">
                              <IconButton
                                onClick={() =>
                                  push("/admin/chapters/" + row.id)
                                }
                              >
                                <Edit />
                              </IconButton>
                              <IconButton
                                onClick={() => push("/chapter/" + row.id)}
                              >
                                <RemoveRedEye />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: 33 * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </Paper>
      )}
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
                  <Typography variant="h5">Tambah Genre</Typography>
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
                  <Typography variant="h5">Kurang Genre</Typography>
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

import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

type Data = Model["Chapter"];

type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "views",
    numeric: true,
    disablePadding: false,
    label: "Views",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all chapters",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Lihat</TableCell>
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSelectedDelete: () => void;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Chapter
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
