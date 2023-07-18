import { Card } from "@mui/material"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChangeEvent } from "react";
import TablePagination from '@mui/material/TablePagination';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';


function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    //setChecked(event.target.checked);
};



  return (
    <FormControlLabel
          value="end"
          control={<Switch color="primary"
          onChange={handleChange}/>}
          label="Status"
          labelPlacement="top"
        />
  );
}
function createData(
  schedulecode,
  classcode,
  classname,
  scheduletype,
  stat,
  view_edit,
  rem
) {
  return { schedulecode, 
    classcode, 
    classname, 
    scheduletype,
    stat,
    view_edit, 
    rem};
}

const rows = [
  createData("test1", 
  "c1", 
  1, 
  "test1", 
  <div>
     <FormControlLabel
          value="end"
          control={<Switch color="primary" align="right"
          //onChange={handleChange}
          />}
          label="Status"
          labelPlacement="top"
        />
  </div>,
  "hi", 
  "hi"),
];

function BasicTable() {
  const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const handleChangePage = (event: unknown, newPage: number) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
  return (
    
    <TableContainer component={Paper}>
      <Table 
      //sx={{ minWidth: 50 }} 
      aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Schedule Code</TableCell>
            <TableCell align="right">Class Code</TableCell>
            <TableCell align="right">Class Name</TableCell>
            <TableCell align="right">Schedule Type</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">View/Edit</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.schedulecode}
              //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell  scope="row" align="right">
                {row.schedulecode}
              </TableCell>
              <TableCell align="right">{row.classcode}</TableCell>
              <TableCell align="right">{row.classname}</TableCell>
              <TableCell align="right">{row.scheduletype}</TableCell>
              <TableCell align="right">{row.stat}</TableCell>
              <TableCell align="right">{row.view_edit}</TableCell>
              <TableCell align="right">{row.rem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Table>
    </TableContainer>
    
  );
}

export default BasicTable;