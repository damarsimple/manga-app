import { Edit, RemoveRedEye } from "@mui/icons-material";
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
} from "@mui/material";
import React, { useState } from "react";
import get from "lodash/get";
import { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

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

type Action = "edit" | "delete";

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
  editPush?: (row: T) => string;
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
  editPush,
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
  const { data, loading, error } = useQuery(query, {
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

  const { push } = useRouter();

  return (
    <Paper sx={{ p: 1 }}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            handleSelectedDelete={handleSelectedDelete}
            name={name}
            handleSearch={handleSearch}
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
                                onClick={() => editPush && push(editPush(row))}
                              >
                                <Edit />
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
import { Model } from "../types";
import { toast } from "react-toastify";
import { useMutation, gql, DocumentNode, useQuery } from "@apollo/client";
import { client } from "../modules/client";
import MuiAppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";

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
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, name, handleSearch } = props;

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
