import { Card } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChangeEvent } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import "./BasicTable.css";

function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    //setChecked(event.target.checked);
  };

  return (
    //unnecessary?
    <FormControlLabel
      value="end"
      control={<Switch color="primary" onChange={handleChange} />}
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
  return {
    schedulecode,
    classcode,
    classname,
    scheduletype,
    stat,
    view_edit,
    rem,
  };
}
const edit_button = (
  <div id="edit_button">
    <Button variant="outlined" startIcon={<EditIcon />}>
      Edit/View
    </Button>
  </div>
);

const delete_button = (
  <div>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  </div>
);

const switch_toggle = (
  <div>
    <FormControlLabel
      value="end"
      control={
        <Switch
          color="primary"
          //onChange={handleChange}
        />
      }
      label="Status"
      labelPlacement="top"
    />
  </div>
);

const rows = [
  createData("t1", "c1", 1, "test1", switch_toggle, edit_button, delete_button),
  createData("t2", "c2", 2, "test2", switch_toggle, edit_button, delete_button),
  createData("t2", "c3", 3, "test2", switch_toggle, edit_button, delete_button),

];

function BasicTable() {
  return (
    <div className="table-data">
      <TableContainer component={Paper}>
        <Table
          //sx={{ minWidth: 50 }}
          aria-label="simple table"
        >
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
                <TableCell scope="row" align="right">
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
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
