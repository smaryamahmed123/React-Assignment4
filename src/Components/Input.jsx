import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

 function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <div>
        <TextField
          id="filled-helperText"
          label="Full Name"
          defaultValue="Pamela Mclellan"
          variant="filled"
          InputLabelProps={{ focused: false }}
          InputProps={{ disableUnderline: true, }}
        />
      </div>
    </Box>
  );
}




 function NativeSelectDemo() {
  return (
    <Box sx={{ '& .MuiTextField-root':{ m: 1, width: '25ch', borderRadius: "10px" } }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'Category',
            id: 'uncontrolled-native',
          }}
        //   InputLabelProps={{ focused: false }}
        //   InputProps={{ underline: false, }}
        >
          <option value={10}>Clothes</option>
          <option value={20}>Footwear</option>
          <option value={30}>Jeen</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}




export {NativeSelectDemo, TextFields}