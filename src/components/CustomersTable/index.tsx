import React, { useState, useEffect } from 'react';
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
    CssBaseline
  } from '@mui/material';
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
  orderBy: Key,
): (a: { [key in Key]: number | string | boolean }, b: { [key in Key]: number | string | boolean}) => number {
  return order === 'desc'
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
    { id: 'id', label: 'Id', disableSorting: false },
    { id: 'email', label: 'Email', disableSorting: false },
    { id: 'first', label: 'Firstname', disableSorting: false },
    { id: 'last', label: 'Lastname', disableSorting: true  },
    { id: 'company', label: 'Company', disableSorting: true  },
    { id: 'country', label: 'Country', disableSorting: true  },
    { id: 'created_at', label: 'Created at', disableSorting: true  },
]

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof DataCustomer) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof DataCustomer) => (event: React.MouseEvent<unknown>) => {
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
            {headCell.disableSorting ? headCell.label :
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                    {headCell.label}
                </TableSortLabel>
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [rows, setRows] = useState<DataCustomer[] | undefined>(undefined);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof DataCustomer>('email');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getTasks = () => {
      const customers = [
        {
          id: 1,
          email: "isidro_von@hotmail.com",
          first: "Torrey",
          last: "Veum",
          company: "Hilll, Mayert and Wolf",
          created_at: "2014-12-25T04:06:27.981Z",
          country: "Switzerland"
          },
          {
          id: 2,
          email: "frederique19@gmail.com",
          first: "Micah",
          last: "Sanford",
          company: "Stokes-Reichel",
          created_at: "2014-07-03T16:08:17.044Z",
          country: "Democratic People's Republic of Korea"
          },
          {
          id: 3,
          email: "fredy54@gmail.com",
          first: "Hollis",
          last: "Swift",
          company: "Rodriguez, Cartwright and Kuhn",
          created_at: "2014-08-18T06:15:16.731Z",
          country: "Tunisia"
          },
          {
          id: 4,
          email: "braxton29@hotmail.com",
          first: "Perry",
          last: "Leffler",
          company: "Sipes, Feeney and Hansen",
          created_at: "2014-07-10T11:31:40.235Z",
          country: "Chad"
          },
          {
          id: 5,
          email: "turner59@gmail.com",
          first: "Janelle",
          last: "Hagenes",
          company: "Lesch and Daughters",
          created_at: "2014-04-21T15:05:43.229Z",
          country: "Swaziland"
          },
          {
          id: 6,
          email: "halie47@yahoo.com",
          first: "Charity",
          last: "Bradtke",
          company: "Gorczany-Monahan",
          created_at: "2014-09-21T21:59:18.892Z",
          country: "Lebanon"
          },
          {
          id: 7,
          email: "loren_yundt@gmail.com",
          first: "Dejah",
          last: "Kshlerin",
          company: "Williamson-Hickle",
          created_at: "2014-11-11T12:20:53.154Z",
          country: "Egypt"
          },
          {
          id: 8,
          email: "kenton_macejkovic80@hotmail.com",
          first: "Ellen",
          last: "Schaefer",
          company: "Tillman-Harris",
          created_at: "2014-07-23T02:00:28.649Z",
          country: "Israel"
          },
          {
          id: 9,
          email: "pascale5@yahoo.com",
          first: "Sven",
          last: "Funk",
          company: "Dare Group",
          created_at: "2014-04-11T12:43:28.977Z",
          country: "Macao"
          },
          {
          id: 10,
          email: "frank34@yahoo.com",
          first: "Ryleigh",
          last: "Cole",
          company: "Zieme and Daughters",
          created_at: "2014-10-18T05:50:28.626Z",
          country: "Congo"
          },
          {
          id: 11,
          email: "harry65@hotmail.com",
          first: "Cooper",
          last: "Grimes",
          company: "Brakus-Rath",
          created_at: "2014-04-29T06:41:20.214Z",
          country: "Reunion"
          },
          {
          id: 12,
          email: "kiana.schowalter@gmail.com",
          first: "Esteban",
          last: "Homenick",
          company: "Bode-Botsford",
          created_at: "2014-12-29T18:46:35.269Z",
          country: "Guadeloupe"
          },
          {
          id: 13,
          email: "josh_batz60@gmail.com",
          first: "Lucinda",
          last: "Waters",
          company: "Ratke LLC",
          created_at: "2015-03-13T12:15:50.844Z",
          country: "Lebanon"
          },
          {
          id: 14,
          email: "zula36@hotmail.com",
          first: "Jarvis",
          last: "Grimes",
          company: "Durgan, Sporer and Bogan",
          created_at: "2014-04-23T23:56:11.268Z",
          country: "Ghana"
          },
          {
          id: 15,
          email: "romaine21@gmail.com",
          first: "Jordon",
          last: "Turcotte",
          company: "Green-Haag",
          created_at: "2014-07-13T00:07:36.299Z",
          country: "Serbia"
          },
          {
          id: 16,
          email: "abdul3@hotmail.com",
          first: "Marques",
          last: "Bins",
          company: "Hoeger, Frami and Kihn",
          created_at: "2014-04-10T14:07:26.141Z",
          country: "Sudan"
          },
          {
          id: 17,
          email: "van39@hotmail.com",
          first: "Edgar",
          last: "Jaskolski",
          company: "Waelchi-Schuppe",
          created_at: "2014-11-18T22:42:23.788Z",
          country: "Wallis and Futuna"
          },
          {
          id: 18,
          email: "emie_corkery82@yahoo.com",
          first: "Adell",
          last: "Rodriguez",
          company: "Tillman, Bailey and Weimann",
          created_at: "2014-07-19T07:19:38.388Z",
          country: "Sierra Leone"
          },
          {
          id: 19,
          email: "alexis62@hotmail.com",
          first: "Madonna",
          last: "Luettgen",
          company: "Heathcote-Schiller",
          created_at: "2014-08-25T04:29:45.139Z",
          country: "Namibia"
          },
          {
          id: 20,
          email: "lucius_hills53@yahoo.com",
          first: "Andre",
          last: "Huel",
          company: "Stroman Inc",
          created_at: "2014-08-22T22:56:27.222Z",
          country: "Georgia"
          },
          {
          id: 21,
          email: "jeanette.leannon29@hotmail.com",
          first: "Darrin",
          last: "Larson",
          company: "Ernser-Oberbrunner",
          created_at: "2014-09-01T21:22:39.559Z",
          country: "Lebanon"
          },
          {
          id: 22,
          email: "concepcion_kiehn@hotmail.com",
          first: "Johann",
          last: "Hintz",
          company: "Paucek and Sons",
          created_at: "2014-12-29T18:29:33.150Z",
          country: "Congo"
          },
          {
          id: 23,
          email: "blaze84@yahoo.com",
          first: "Cruz",
          last: "Harber",
          company: "O'Connell and Sons",
          created_at: "2014-10-23T09:57:26.941Z",
          country: "Lesotho"
          },
          {
          id: 24,
          email: "vanessa27@hotmail.com",
          first: "Melba",
          last: "Stiedemann",
          company: "Rath Group",
          created_at: "2014-09-26T10:55:49.642Z",
          country: "Andorra"
          },
          {
          id: 25,
          email: "gay_quigley98@gmail.com",
          first: "Bonita",
          last: "Hickle",
          company: "Ledner, Jacobs and Schuster",
          created_at: "2015-03-03T13:32:26.071Z",
          country: "Congo"
          },
          {
          id: 26,
          email: "mireille.conroy96@hotmail.com",
          first: "Kali",
          last: "Bailey",
          company: "Bailey, McDermott and Kuphal",
          created_at: "2014-12-13T01:39:35.925Z",
          country: "Tuvalu"
          },
          {
          id: 27,
          email: "candido.cormier89@gmail.com",
          first: "Kristy",
          last: "Quigley",
          company: "Brown, Carter and Keeling",
          created_at: "2014-06-01T05:27:07.870Z",
          country: "Burkina Faso"
          },
          {
          id: 28,
          email: "lola_altenwerth82@yahoo.com",
          first: "Leanna",
          last: "Dach",
          company: "Fisher and Sons",
          created_at: "2014-09-19T09:39:20.201Z",
          country: "Bahamas"
          },
          {
          id: 29,
          email: "willie36@hotmail.com",
          first: "Hannah",
          last: "O'Keefe",
          company: "Monahan Group",
          created_at: "2014-12-02T23:43:36.414Z",
          country: "Guam"
          },
          {
          id: 30,
          email: "minerva10@gmail.com",
          first: "Melyna",
          last: "Carroll",
          company: "Wolf Group",
          created_at: "2014-05-29T13:39:21.805Z",
          country: "Indonesia"
          },
          {
          id: 31,
          email: "peyton_mante@yahoo.com",
          first: "Rashawn",
          last: "Mayer",
          company: "Metz-Harber",
          created_at: "2014-08-22T09:24:22.491Z",
          country: "El Salvador"
          },
          {
          id: 32,
          email: "trinity_fay@yahoo.com",
          first: "Rodrigo",
          last: "Huel",
          company: "White Inc",
          created_at: "2015-02-28T06:22:57.581Z",
          country: "Gabon"
          },
          {
          id: 33,
          email: "reilly.kiehn6@hotmail.com",
          first: "Bud",
          last: "Raynor",
          company: "Lesch-McLaughlin",
          created_at: "2014-06-08T04:17:14.965Z",
          country: "Hungary"
          },
          {
          id: 34,
          email: "shawna_walsh47@yahoo.com",
          first: "Estefania",
          last: "Parisian",
          company: "Barton-Greenholt",
          created_at: "2014-04-10T06:25:32.109Z",
          country: "Guyana"
          },
          {
          id: 35,
          email: "retha28@hotmail.com",
          first: "Crawford",
          last: "Paucek",
          company: "McClure-Raynor",
          created_at: "2014-11-09T22:43:45.729Z",
          country: "Cameroon"
          },
          {
          id: 36,
          email: "nathen_mckenzie60@gmail.com",
          first: "Cale",
          last: "Zieme",
          company: "Strosin-Stracke",
          created_at: "2014-11-12T09:04:11.787Z",
          country: "Sweden"
          },
          {
          id: 37,
          email: "mara75@hotmail.com",
          first: "Ike",
          last: "Schimmel",
          company: "Donnelly, Mante and Douglas",
          created_at: "2014-05-26T22:00:03.155Z",
          country: "Bhutan"
          },
          {
          id: 38,
          email: "adonis_ankunding@gmail.com",
          first: "Samara",
          last: "Labadie",
          company: "Wyman-Lesch",
          created_at: "2015-03-09T12:43:23.096Z",
          country: "Holy See (Vatican City State)"
          },
          {
          id: 39,
          email: "newton.schultz@hotmail.com",
          first: "Joel",
          last: "Volkman",
          company: "Fadel, Breitenberg and Hackett",
          created_at: "2015-03-21T10:58:45.257Z",
          country: "United States of America"
          },
          {
          id: 40,
          email: "neva.pollich30@yahoo.com",
          first: "Cali",
          last: "Champlin",
          company: "Witting and Sons",
          created_at: "2014-10-26T13:31:54.321Z",
          country: "Canada"
          },
          {
          id: 41,
          email: "lindsay.weber@yahoo.com",
          first: "Ahmed",
          last: "Klocko",
          company: "Tromp-Harvey",
          created_at: "2015-02-06T05:21:25.142Z",
          country: "Grenada"
          },
          {
          id: 42,
          email: "kira_feil@yahoo.com",
          first: "Presley",
          last: "Wuckert",
          company: "Hilpert-Bode",
          created_at: "2014-10-11T02:49:59.159Z",
          country: "Bangladesh"
          },
          {
          id: 43,
          email: "lew.blick34@yahoo.com",
          first: "Bell",
          last: "Sporer",
          company: "Parisian, Reichert and Kutch",
          created_at: "2015-03-18T19:33:39.840Z",
          country: "Poland"
          },
          {
          id: 44,
          email: "reva.lindgren84@yahoo.com",
          first: "Ola",
          last: "Cole",
          company: "Fadel-Schoen",
          created_at: "2014-10-29T19:12:37.946Z",
          country: "Bouvet Island (Bouvetoya)"
          },
          {
          id: 45,
          email: "harley20@hotmail.com",
          first: "Cleo",
          last: "Sanford",
          company: "Reilly and Daughters",
          created_at: "2014-10-19T13:15:38.999Z",
          country: "Somalia"
          }
      ];
      setRows(customers);
  };

  useEffect(() => {
    if (rows === undefined) {
      getTasks();
    }

  }, [rows]);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof DataCustomer) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  //     getTasks()
  //   }
  // };

  const emptyRows = rows === undefined ? 0 : rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="table-container">
        {rows === undefined ? <CircularProgress /> : (
          <>
          <CssBaseline />
            <Container maxWidth="md">
              <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
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
                      size={dense ? 'small' : 'medium'}
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
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, index) => {
                            return (
                              <TableRow
                                key={index}
                              >
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.first}</TableCell>
                                <TableCell align="center">{row.last}</TableCell>
                                <TableCell align="center">{row.company}</TableCell>
                                <TableCell align="center">{row.country}</TableCell>
                                <TableCell align="center">{row.created_at}</TableCell>
                              </TableRow>
                            );
                          })}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
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
                  control={<Switch checked={dense} onChange={handleChangeDense} color="default"/>}
                  label="Dense padding"
                />
                </Box>
                </Container>
                </>  
        )}
    </div>
  );
}