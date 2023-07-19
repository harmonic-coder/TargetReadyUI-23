// import { Card } from "@mui/material";
// import * as React from "react";
// import Button from "@mui/material/Button";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DltPop from "../ExamMainPage/dltpopover";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { ChangeEvent } from "react";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";

// import "./BasicTable.css";

// function ControlledSwitches() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = () => {
//     //setChecked(event.target.checked);
//   };

//   return (
//     //unnecessary?
//     <FormControlLabel
//       value="end"
//       control={<Switch color="primary" onChange={handleChange} />}
//       label="Status"
//       labelPlacement="top"
//     />
//   );
// }
// function createData(
//   schedulecode,
//   classcode,
//   classname,
//   scheduletype,
//   stat,
//   view_edit,
//   rem
// ) {
//   return {
//     schedulecode,
//     classcode,
//     classname,
//     scheduletype,
//     stat,
//     view_edit,
//     rem,
//   };
// }
// const edit_button = (
//   <div id="edit_button">
//     <Button variant="outlined" startIcon={<EditIcon />}>
//       Edit/View
//     </Button>
//   </div>
// );

// const delete_button = (
//   <div>
//     {/* <Button variant="outlined" startIcon={<DeleteIcon /> } onClick={()=> DltPop}>
//       Delete
//     </Button> */}
//     <DltPop/>
//   </div>
// );

// const switch_toggle = (
//   <div>
//     <FormControlLabel
//       value="end"
//       control={
//         <Switch
//           color="primary"
//           //onChange={handleChange}
//         />
//       }
//       label="Status"
//       labelPlacement="top"
//     />
//   </div>
// );

// const rows = [
//   createData("t1", "c1", 1, "test1", switch_toggle, edit_button, delete_button),
//   createData("t2", "c2", 2, "test2", switch_toggle, edit_button, delete_button),
//   createData("t2", "c3", 3, "test2", switch_toggle, edit_button, delete_button),

// ];
// const handleDeleteRow = (id) => {
//   setRows((prevRows) => prevRows.filter((row) => row.schedulecode !== id));
// };
// function BasicTable() {
//   return (
//     <div className="table-data">
//       <TableContainer component={Paper}>
//         <Table
//           //sx={{ minWidth: 50 }}
//           aria-label="simple table"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell align="right">Schedule Code</TableCell>
//               <TableCell align="right">Class Code</TableCell>
//               <TableCell align="right">Class Name</TableCell>
//               <TableCell align="right">Schedule Type</TableCell>
//               <TableCell align="right">Status</TableCell>
//               <TableCell align="right">View/Edit</TableCell>
//               <TableCell align="right">Remove</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.schedulecode}
//                 //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell scope="row" align="right">
//                   {row.schedulecode}
//                 </TableCell>
//                 <TableCell align="right">{row.classcode}</TableCell>
//                 <TableCell align="right">{row.classname}</TableCell>
//                 <TableCell align="right">{row.scheduletype}</TableCell>
//                 <TableCell align="right">{row.stat}</TableCell>
//                 <TableCell align="right">{row.view_edit}</TableCell>
//                 <TableCell align="right">{row.rem}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default BasicTable;
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import DltPop from "../ExamMainPage/dltpopover";


function BasicTable() {
  const jsonData = [
    {
      id: 1,
      scheduleCode: "t1",
      classCode: "C1",
      className: 1,
      scheduleType: "Test 1",
      nestedData: [
        {
          id: 1,
          code: "M101",
          name: "Mathematics",
          timing: randomCreatedDate(),
        },
        {
          id: 2,
          code: "Ph101",
          name: "Physics",
          timing: randomCreatedDate(),
        },
        { 
          id: 3, 
          code: "Ch101", 
          name: "Chemistry", 
          timing: randomCreatedDate() 
        }
      ],
    },
    {
      id: 2,
      scheduleCode: "t2",
      classCode: "C2",
      className: 2,
      scheduleType: "Test 2",
      nestedData: [
        { id: 1, title: "Nested 1" },
        { id: 2, title: "Nested 2" },
        { id: 3, title: "Nested 3" },
      ],
    },
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState([]);

  const handleNestedDataClick = (nestedData) => {
    setDialogData(nestedData);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogData([]);
  };

  const columns = [
    { field: "scheduleCode", headerName: "Schedule Code", width: 200 },
    { field: "classCode", headerName: "Class Code", width: 200 },
    { field: "className", headerName: "Class Name", width: 200 },
    { field: "scheduleType", headerName: "Schedule Type", width: 200 },
    { 
      field: "status",
      renderCell:(cellValues)=>
      {
        return(<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />);
      }, 
      headerName: "Status", width: 100 },
    {
      field: "actions",
      headerName: "View/Edit",
      width: 120,
      renderCell: (params) => (
        <Button onClick={() => handleNestedDataClick(params.row.nestedData)}>
          view
        </Button>
      ),
    },
    { field: "remove",
    renderCell:(cellValues)=>
      {
        return(<DltPop/>);
      },
       headerName: "Remove", width: 200 },
  ];

  const dialogColumns = [
    {
      field: "code",
      headerName: "Subject Code",
      type: "String",
      editable: true,
    },
    {
      field: "name",
      headerName: "Subject Name",
      editable: true,
      width: 180,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "timing",
      headerName: "Date & Time",
      type: "dateTime",
      width: 220,
      valueGetter: ({ value }) => value && new Date(value),
      editable: true,
    }
  ];

  return (
    <div>
      <div style={{ height: 500, width: 1200, }}>
        <DataGrid rows={jsonData} columns={columns} hideFooter hideFooterPagination hideFooterSelectedRowCount/>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        <DialogTitle>Nested Data</DialogTitle>
        <DialogContent style={{ height: 300, width: "100%" }}>
          <DataGrid rows={dialogData} columns={dialogColumns} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BasicTable;