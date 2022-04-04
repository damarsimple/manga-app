import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import {
  Paper,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  TablePagination,
  Typography,
  TextField,
  Button,
  Modal,
  Select,
  MenuItem,
  Chip,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import get from "lodash/get";
import { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

const ignores = ["id", "__typename", "createdAt", "updatedAt"];

const Input = styled("input")({
  display: "none",
});

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
interface BaseModel {
  id: number;
}

type Action = "edit" | "delete" | "create";

export interface InputSchema<T> {
  name: keyof T;
  label: string;
  type?:
    | "text"
    | "number"
    | "file"
    | "date"
    | "time"
    | "datetime-local"
    | "select"
    | "select-multi";
  selects?: string[];
  dontRender?: (e: Record<string, any>) => boolean;
}
interface TableProp<T> {
  headcells: HeadCell<T>[];
  action?: Action[];
  name: string;
  deleteQuery?: DocumentNode;
  query: DocumentNode;
  countQuery: DocumentNode;
  keys: string;
  countKeys: string;
  TooltipChildren?: (row: T) => React.ReactNode;

  editAction?: "function" | "schema";
  editSchema?: InputSchema<T>[];
  editQuery?: DocumentNode;
  editModifier?: (data: Partial<T>) => Record<string, any>;
  editFunction?: (row: T) => void;

  createAction?: "function" | "schema";
  createSchema?: InputSchema<T>[];
  createQuery?: DocumentNode;
  createDefaultValue?: Record<keyof T, any>;
  createModifier?: (data: Record<keyof T, any>) => Record<string, any>;
  createFunction?: () => void;
}

export default function MUITable<T extends BaseModel>({
  headcells,
  name,
  deleteQuery,
  action,
  query,
  keys,
  TooltipChildren,
  countQuery,
  countKeys,

  editAction,
  editSchema,
  editQuery,
  editFunction,
  editModifier,

  createAction,
  createSchema,
  createQuery,
  createFunction,
  createModifier,
  createDefaultValue,
}: TableProp<T>) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>("id");
  const [selected, setSelected] = useState<readonly number[]>([]);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
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

  const handleSelectedDelete = () => {
    toast.info(`${selected.length} ${name.toLowerCase()}s will be deleted`);

    deleteQuery &&
      client.query({
        query: deleteQuery,
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useQuery(query, {
    variables: {
      where: {
        ...(search.length !== 0 && {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }),
      },
      take: rowsPerPage,
      skip: page * rowsPerPage,
      orderBy: [
        {
          [orderBy]: order,
        },
      ],
    },
  });

  const handleSearch = (e: string) => {
    setSearch(e);
  };

  const { data: cc } = useQuery(countQuery);

  const rows: T[] = get(data, keys, []);
  const count: number = get(cc, countKeys, 0);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleDelete = async (data: number[]) => {
    if (!deleteQuery) {
      toast.error("deleteQuery not defined !");
      return;
    }
    client
      .mutate({
        mutation: deleteQuery,
        variables: {
          where: {
            id: {
              in: data,
            },
          },
        },
      })
      .then((e) => {
        toast.success("Deleted " + data.join(","));
        refetch();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState<Partial<T>>({});

  const handleEdit = async () => {
    if (!editQuery) {
      toast.error("editQuery not defined !");
      return;
    }

    if (!editData) {
      toast.error("editData not defined !");
      return;
    }

    const cp = { ...editData };

    for (const key of ignores) {
      //@ts-ignore
      delete cp[key];
    }

    const data = editModifier ? await editModifier(cp) : cp;

    const schemas: Record<string, InputSchema<T>> = editSchema?.reduce(
      (acc, cur) => {
        return {
          ...acc,
          [cur.name]: {
            ...cur,
          },
        };
      },
      {}
    ) || {};

    for (const key in data) {
      if (ignores.includes(key)) continue;

      const schema = schemas?.[key];

      if (!schema) {
        toast.error("schema not defined for " + key);
        return;
      }

      if (schema.type == "number") {
        data[key] = parseInt(data[key] as string, 10);
      }
    }
    const modified: Record<string, { set: any }> = {};

    for (const key in data) {
      modified[key] = {
        set: data[key],
      };
    }

    client
      .mutate({
        mutation: editQuery,
        variables: {
          data: modified,
          where: {
            id: editData.id,
          },
        },
      })
      .then((e) => {
        toast.success("Edited " + name);
        setEditData({});
        setShowEdit(false);
        refetch();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const [showCreate, setShowCreate] = useState(false);

  const [createData, setCreateData] = useState<Record<any, any> | null>(null);

  const handleCreate = async () => {
    if (!createQuery) {
      toast.error("createQuery not defined !");
      return;
    }

    if (!createData) {
      toast.error("createData not defined !");
      return;
    }

    const data = createModifier ? await createModifier(createData) : createData;

    const schemas: Record<string, InputSchema<T>> = createSchema?.reduce(
      (acc, cur) => {
        return {
          ...acc,
          [cur.name]: {
            ...cur,
          },
        };
      },
      {}
    ) || {};

    for (const key in data) {
      const schema = schemas?.[key];

      if (!schema) {
        toast.error("Sum Tim Wong !");
        return;
      }

      if (schema.type == "number") {
        data[key] = parseInt(data[key] as string, 10);
      }
    }

    client
      .mutate({
        mutation: createQuery,
        variables: { data },
      })
      .then((e) => {
        toast.success("Created " + name);
        setCreateData(null);
        setShowCreate(false);
        refetch();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <Paper sx={{ p: 1 }}>
      <Modal open={showCreate} onClose={() => setShowCreate(false)}>
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
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buat {name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: "column",
            }}
          >
            {createSchema?.map((e, i) => {
              if (
                e.dontRender &&
                e.dontRender({ ...createDefaultValue, ...createData })
              )
                return <Box key={`${i}-${e.name}-unused`}></Box>;

              if (e.type == "select-multi") {
                return (
                  <Box
                    key={`${i}-${e.name}`}
                    sx={{ display: "flex", gap: 2, flexDirection: "column" }}
                  >
                    {e.selects?.map((x) => (
                      <FormGroup key={x}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                (createData?.[e.name] as any[])?.includes(x) ??
                                false
                              }
                              onChange={(z) => {
                                const cp = {
                                  ...createDefaultValue,
                                  ...(createData ?? {}),
                                };

                                //@ts-ignore
                                if (!cp[e.name]) cp[e.name] = [];
                                //@ts-ignore
                                if (z.target.checked) {
                                  //@ts-ignore
                                  cp[e.name].push(x);
                                  //@ts-ignore
                                } else {
                                  //@ts-ignore
                                  cp[e.name] = cp[e.name].filter(
                                    //@ts-ignore
                                    (y: string) => y != x
                                  );
                                }
                                setCreateData({ ...cp });
                              }}
                            />
                          }
                          label={x}
                        />
                      </FormGroup>
                    ))}
                  </Box>
                );
              }

              if (e.type == "select") {
                return (
                  <Select
                    label={e.label}
                    key={`${i}-${e.name}`}
                    onChange={(x) => {
                      setCreateData({
                        ...createDefaultValue,
                        ...createData,
                        [e.name]: x.target.value,
                      });
                    }}
                    defaultValue={
                      createDefaultValue && createDefaultValue[e.name]
                    }
                  >
                    {e.selects?.map((e, i) => (
                      <MenuItem key={e} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                );
              }

              if (e.type == "file") {
                return (
                  <label key={`${i}-${e.name}`} htmlFor="contained-button-file">
                    {createData && createData[e.name] && (
                      <Typography>
                        {(createData && (createData[e.name] as File))?.name}
                      </Typography>
                    )}
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(x) => {
                        const file = x.target.files && x.target.files[0];
                        if (file)
                          setCreateData({
                            ...createDefaultValue,
                            ...createData,
                            [e.name]: file,
                          });
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
                      Upload {e.label}
                    </Button>
                  </label>
                );
              }

              return (
                <TextField
                  key={`${i}-${e.name}`}
                  label={e.label}
                  defaultValue={
                    createDefaultValue && createDefaultValue[e.name]
                  }
                  type={e.type}
                  onChange={(x) => {
                    setCreateData({
                      ...createDefaultValue,
                      ...createData,
                      [e.name]: x.target.value,
                    });
                  }}
                />
              );
            })}
          </Box>

          <Button onClick={handleCreate}>Buat data</Button>

          <Button
            onClick={() => {
              setShowCreate(false);
            }}
          >
            Batal
          </Button>
        </Box>
      </Modal>
      <Modal open={showEdit} onClose={() => setShowEdit(false)}>
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
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit {name} {editData?.id}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: "column",
            }}
          >
            {editSchema?.map((e, i) => {
              if (e.dontRender && e.dontRender({ ...editData, ...editData }))
                return <Box key={`${i}-${e.name}-unused`}></Box>;

              if (e.type == "select") {
                return (
                  <Select
                    label={e.label}
                    key={`${i}-${e.name}`}
                    onChange={(x) => {
                      setEditData({
                        ...editData,
                        [e.name]: x.target.value,
                      });
                    }}
                    defaultValue={editData && editData[e.name]}
                  >
                    {e.selects?.map((e, i) => (
                      <MenuItem key={e} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                );
              }

              if (e.type == "file") {
                return (
                  <label key={`${i}-${e.name}`} htmlFor="contained-button-file">
                    {editData && editData[e.name] && (
                      <Typography>
                        {
                          (editData && (editData[e.name] as unknown as File))
                            ?.name
                        }
                      </Typography>
                    )}
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(x) => {
                        const file = x.target.files && x.target.files[0];
                        if (file)
                          setEditData({
                            ...editData,
                            [e.name]: file,
                          });
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
                      Upload {e.label}
                    </Button>
                  </label>
                );
              }

              return (
                <TextField
                  key={`${i}-${e.name}`}
                  label={e.label}
                  defaultValue={editData && editData[e.name]}
                  type={e.type}
                  onChange={(x) => {
                    setEditData({
                      ...editData,
                      [e.name]: x.target.value,
                    });
                  }}
                />
              );
            })}
          </Box>

          <Button onClick={handleEdit}>Edit Data</Button>

          <Button
            onClick={() => {
              setShowEdit(false);
            }}
          >
            Batal
          </Button>
        </Box>
      </Modal>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            handleSelectedDelete={handleSelectedDelete}
            name={name}
            handleSearch={handleSearch}
            withCreate={action?.includes("create")}
            onCreate={() => {
              if (createAction == "function") {
                createFunction && createFunction();
              } else {
                setShowCreate(true);
              }
            }}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"small"}
            >
              <EnhancedTableHead<T>
                headcells={headcells}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy as string}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                name={name}
                action={action}
              />
              <TableBody>
                {rows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <HtmlTooltip
                      key={row.id}
                      title={
                        <React.Fragment>
                          {TooltipChildren && TooltipChildren(row)}
                        </React.Fragment>
                      }
                    >
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        selected={isItemSelected}
                      >
                        <TableCell
                          padding="checkbox"
                          onClick={(event) => handleClick(event, row.id)}
                        >
                          <Checkbox color="primary" checked={isItemSelected} />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          onClick={(event) => handleClick(event, row.id)}
                        >
                          {row.id}
                        </TableCell>
                        {headcells.map((headcell) => (
                          <TableCell
                            onClick={(event) => handleClick(event, row.id)}
                            component="th"
                            scope="row"
                            key={`${row.id}-${headcell.name}`}
                          >
                            {row[headcell.name]}
                          </TableCell>
                        ))}

                        {action && (
                          <TableCell component="th" id={labelId} scope="row">
                            {action.includes("edit") && (
                              <IconButton
                                onClick={() => {
                                  if (editAction == "function") {
                                    editFunction && editFunction(row);
                                  } else {
                                    setShowEdit(true);
                                    setEditData(row);
                                  }
                                }}
                              >
                                <Edit />
                              </IconButton>
                            )}
                            {action.includes("delete") && (
                              <IconButton
                                onClick={() => handleDelete([row.id])}
                              >
                                <Delete />
                              </IconButton>
                            )}
                          </TableCell>
                        )}
                      </TableRow>
                    </HtmlTooltip>
                  );
                })}
                {loading && (
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
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Paper>
  );
}

import { alpha, styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { toast } from "react-toastify";
import { useMutation, gql, DocumentNode, useQuery } from "@apollo/client";
import { client } from "../modules/client";
import MuiAppBar from "@mui/material/AppBar";
import { isFunction } from "util";

type Order = "asc" | "desc";

interface HeadCell<T> {
  disablePadding?: boolean;
  name: keyof T;
  label: string;
  numeric?: boolean;
}

interface EnhancedTableProps<T> {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headcells: HeadCell<T>[];
  name: string;
  action?: Action[];
}

function EnhancedTableHead<T extends BaseModel>(props: EnhancedTableProps<T>) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headcells,
    name,
    action,
  } = props;
  const createSortHandler =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
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
              "aria-label": `select all ${name.toLocaleLowerCase()}s`,
            }}
          />
        </TableCell>
        {[
          {
            name: "id" as keyof T,
            label: "ID",
            numeric: true,
            disablePadding: true,
          },
          ...headcells,
        ].map((headCell) => (
          <TableCell
            key={`headcell-${headCell.name}`}
            sortDirection={orderBy === headCell.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.name}
              direction={orderBy === headCell.name ? order : "asc"}
              onClick={createSortHandler(headCell.name)}
            >
              {headCell.label}
              {orderBy === headCell.name ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {action && <TableCell>Aksi</TableCell>}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSelectedDelete: () => void;
  handleSearch: (e: string) => void;
  name: string;
  withCreate?: boolean;
  onCreate?: () => void;
}

const EnhancedTableToolbar = ({
  numSelected,
  name,
  handleSearch,
  withCreate,
  onCreate,
}: EnhancedTableToolbarProps) => {
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
          {name}
        </Typography>
      )}
      {withCreate && (
        <Button
          onClick={() => {
            onCreate && onCreate();
          }}
          variant="contained"
          sx={{ mr: 2 }}
        >
          Buat
        </Button>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <TextField
          placeholder="Search"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
        />
      )}
    </Toolbar>
  );
};
