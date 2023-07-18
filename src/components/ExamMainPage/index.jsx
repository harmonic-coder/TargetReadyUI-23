import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./index.css"
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';





const ExamMainPage= ()=>{

  // const {anchorEl, setAnchorEl} = React.useState<HTMLButtonElement | null>(null);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // console.log(setAnchorEl);
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
    
    function handleChange (){
        
    }

    const columns: GridColDef[] = [
      { field: 'code', headerName: 'Subject Code',type:'String', editable: true },
      {
        field: 'name',
        headerName: 'Subject Name',
        editable: true,
        width: 180,
        align: 'left',
        headerAlign: 'left',
      },
      {
        field: 'timing',
        headerName: 'Date & Time',
        type: 'dateTime',
        width: 220,
        valueGetter: ({ value }) => value && new Date(value),
        editable: true,
      },
    ];
    const rows: GridRowsProp = [
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
  {id: 3,
    code: "Ch101",
    name: "Chemistry",
    timing: randomCreatedDate(),
  },
  {id: 4,
    code: "Co101",
    name: "Computer Science",
    timing: randomCreatedDate(),
  },
];
    return (
        <div className='main-div'>
          <div classname="add-button">
          <Button variant="contained" onClick={handleClick}> Add Schedule
       </Button>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={()=>setAnchor(null)}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          
          <div>
            <div className="add-sh-dropdowns">
            <Box className ="dd1">
            <FormControl  fullWidth variant="filled" sx={{ m: 1 }}>
                <InputLabel>Class Code</InputLabel>
                  <Select>
                    <MenuItem value={10}>C10</MenuItem>
                    <MenuItem value={9}>C09</MenuItem>
                    <MenuItem value={8}>C08</MenuItem>
                  </Select>
            </FormControl>
            </Box>

            <Box className ="dd2">
            <FormControl  fullWidth variant="filled" sx={{ m: 1 }}>
                <InputLabel>Class Name</InputLabel>
                  <Select>
                    <MenuItem value={10}>10th</MenuItem>
                    <MenuItem value={9}>9th</MenuItem>
                    <MenuItem value={8}>8th</MenuItem>
                  </Select>
            </FormControl>
            </Box>

            <Box className ="dd3">
            <FormControl  fullWidth variant="filled" sx={{ m: 1 }}>
                <InputLabel>Schedule Type</InputLabel>
                  <Select>
                    <MenuItem value={1}>Test 1</MenuItem>
                    <MenuItem value={2}>Test 2</MenuItem>
                    <MenuItem value={4}>Mid-Term</MenuItem>
                    <MenuItem value={5}>Test 3</MenuItem>
                    <MenuItem value={6}>Test 4</MenuItem>
                    <MenuItem value={7}>Pre-Preparatory</MenuItem>
                    <MenuItem value={8}>Preparatory</MenuItem>
                    <MenuItem value={9}>Final</MenuItem>
                  </Select>
            </FormControl>
            </Box>
            </div>
              <div class = "Table">
              <DataGrid editMode="row" rows={rows} columns={columns} />
              </div>
          </div>
        </Typography>
      </Popover>
          </div>
            <div className="drop-down">
            <Box className='label'
            //sx={{ background: "#6c88c8" }}
            >
      <FormControl 
      fullWidth 
      variant="filled" sx={{ m: 1 }}
      >
        <InputLabel  >Class</InputLabel>
        <Select className='label'
            // MenuProps={{
            //     anchorOrigin:{
            //         vertical:"bottom",
            //         horizontal:"left"
            //     },
            //     transformOrigin:{
            //         vertical:"top",
            //         horizontal: "left"
            //     },
            //     getContentAnchorEl: null

            // }}
           // style={{left:200}}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
    </Box>

            </div>
            <div className="table">

            </div>
        </div>
    )
}

export default ExamMainPage;