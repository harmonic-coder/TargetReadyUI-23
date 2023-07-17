import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./index.css"


const ExamMainPage= ()=>{

    function handleChange (){
        
    }

    
    return (
        <div>
            <div className="drop-down">
            <Box className='label'
            //sx={{ background: "#6c88c8" }}
            >
      <FormControl 
      fullWidth 
      variant="filled" sx={{ m: 2 }}
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