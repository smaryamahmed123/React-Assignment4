import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Img4 from '../assets/img4.jpg'
import Img5 from '../assets/img5.jpg'
import Img6 from '../assets/img6.jpg'
import Stack from '@mui/material/Stack';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



 function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={Img4} />
      <Avatar alt="Travis Howard" src={Img5} />
      <Avatar alt="Cindy Baker" src={Img6} />
      <Avatar alt="Agnes Walker" src={Img4} />
      <Avatar alt="Trevor Henderson" src={Img5} />
      <Avatar alt="Trevor Henderson" src={Img6} />
      <Avatar alt="Trevor Henderson" src={Img4} />
      <Avatar alt="Trevor Henderson" src={Img5} />
    </AvatarGroup>
  );
}




 function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
    
      <Avatar
        alt="Remy Sharp"
        src={Img5}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}



export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

//   const handleDevices = (event, newDevices) => {
//     if (newDevices.length) {
//       setDevices(newDevices);
//     }
//   };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

    </Stack>
  );
}






export {GroupAvatars, SizeAvatars, ToggleButtonNotEmpty}