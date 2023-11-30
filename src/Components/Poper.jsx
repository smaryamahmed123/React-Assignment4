import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';



const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function CustomizedTooltips() {
  return (
    <div>
      
      <BootstrapTooltip title="Add" arrow placement="top">
        <Button sx={{color: "black", fontWeight: "bold", textTransform: "capitalize" }}>Hover me</Button>
      </BootstrapTooltip>
     
    </div>
  );
}





function BasicRating() {
  const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
      
        '& > legend': { mt: 1 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}



 function SliderSizes() {
  return (
    <Box sx={{ width: 280 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"                           
        step={1}
        valueLabelDisplay="on"
        sx={{ color: 'orangered', mt: 1 }} 
      />
        {/* <Slider
      /> */}
    </Box>
  );
}


export {BasicRating, CustomizedTooltips, SliderSizes}