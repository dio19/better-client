import React, { useState, useEffect, useContext } from "react";
import { CustomerContext } from "../../context";
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableHead,
  TableSortLabel,
  TablePagination,
  CircularProgress,
  TableContainer,
  FormControlLabel,
  Switch,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";
// import { Search } from "@mui/icons-material";
// import classNames from "classnames";
import { DataCustomer, HeadCell, Order } from "../../types";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: HeadCell[] = [
  { id: "id", label: "Id", disableSorting: false },
  { id: "email", label: "Email", disableSorting: false },
  { id: "first", label: "Firstname", disableSorting: false },
  { id: "last", label: "Lastname", disableSorting: true },
  { id: "company", label: "Company", disableSorting: true },
  { id: "country", label: "Country", disableSorting: true },
  { id: "created_at", label: "Created at", disableSorting: true },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataCustomer
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof DataCustomer) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align="center"
          >
            {headCell.disableSorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [rows, setRows] = useState<DataCustomer[] | undefined>(undefined);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof DataCustomer>("email");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { DataContext } = useContext(CustomerContext);

  const getCustomers = () => {
    setRows(DataContext);
  };

  useEffect(() => {
    if (rows === undefined) {
      getCustomers();
    }
  }, [rows]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof DataCustomer
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   if (value !== "") {
  //     getCustomersByQuery(value)
  //   }
  //   if (value === "") {
  //     getCustomers()
  //   }
  // };

  const emptyRows =
    rows === undefined
      ? 0
      : rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="table-container">
      {rows === undefined ? (
        <CircularProgress />
      ) : (
        <>
          <CssBaseline />
          <Container maxWidth="md">
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                {/* <Toolbar>
                      <TextField
                          variant="outlined"
                          label="Search Tasks"
                          InputProps={{
                              startAdornment: (<InputAdornment position="start">
                                  <Search />
                              </InputAdornment>)
                          }}
                          onChange={handleSearch}
                      />
                  </Toolbar> */}
                <TableContainer>
                  <Table
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                    aria-label="enhanced table"
                  >
                    <EnhancedTableHead
                      order={order}
                      orderBy={orderBy}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell align="center">{row.id}</TableCell>
                              <TableCell align="center">{row.email}</TableCell>
                              <TableCell align="center">{row.first}</TableCell>
                              <TableCell align="center">{row.last}</TableCell>
                              <TableCell align="center">
                                {row.company}
                              </TableCell>
                              <TableCell align="center">
                                {row.country}
                              </TableCell>
                              <TableCell align="center">
                                {row.created_at}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{ height: (dense ? 33 : 53) * emptyRows }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
              <FormControlLabel
                control={
                  <Switch
                    checked={dense}
                    onChange={handleChangeDense}
                    color="default"
                  />
                }
                label="Dense padding"
              />
            </Box>
          </Container>
        </>
      )}
    </div>
  );
}
