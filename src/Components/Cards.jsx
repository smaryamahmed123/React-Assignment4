import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Img1 from '../assets/img1.png';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CircularDeterminate from './Loader';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img3 from '../assets/img3.jpg'
import Img6 from '../assets/img6.jpg'
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import {TextFields, NativeSelectDemo} from './Input';
import BasicTabs from './tabs';
import {CustomizedTooltips, BasicRating, SliderSizes} from './Poper';
import  {GroupAvatars, SizeAvatars, ToggleButtonNotEmpty} from './Avater'
import {BasicButtons1, BasicButtons2, BasicButtons3, UnderlineLink} from './Buttons';
import  {ActionAlerts, IconAlerts} from './Alert'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import Button from '@mui/material/Button';
import Js from '../assets/Js.svg'
import Figma from '../assets/Figma.png';
import Ts from '../assets/Ts.svg';
import Img7 from '../assets/img7.png';
import NextJs from '../assets/NextJs.png';
import Vite from '/vite.svg'
import { LaunchIcon } from '@mui/icons-material/Launch';
import Img2 from '../assets/img2.png'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>

);

const card = (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 30, fontWeight: "bold" }} color="text.black" gutterBottom>
      Still Have Questions?
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Please describe your case to receive the most accurate advice
      </Typography>
    </CardContent>
    <CardActions>
      <BasicButtons2 btnText="Contact Us" />
    </CardActions>
  </>
);

 function OutlinedCard() {
  return (
    <Box
      sx={{
        // display: 'flex',
        // flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',  // Center horizontally
        alignItems: 'center',
        '& > :not(style)': {
          m: 1,
          p: 7,
          width: 600,
          height: 250,
          textAlign: "center",
          alignContent: "center",
          borderRadius: 5
        },
      }}
    >
      <Card elevation={3} >{card}</Card>
    </Box>
  );
}

function Card1(){
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        //   height: '100vh', // Adjust the height as needed
        }}
      >
        <Card style={{ maxWidth: 900, maxHeight: 800 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={Img1}
              alt="img"
            />
            <CardContent
            height="500"
            width="400"
            sx={{textAlign: "center"}}
            >
              <Typography gutterBottom variant="h5" component="div">
              NEW START
              </Typography>
              <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: "bolder"}}>
              The <span style={{color: "orangered"}}>ZONE</span> UI Kit
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Modern ui kit to save your time, boost your creativity.
              Neat and super stylish layout ready to help with your projects
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      );
}


function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          p:"0,15px,0,15px" ,
          width: 355,
          height: 700,
        },
      }}
    >
      <Paper   elevation={0} >
      <Typography variant='p'>
      INTERFACE STARTER KIT
         </Typography> 
      <h1>Flexible Components</h1>
      <p>Pre-set components are easy to customize and use. We collected most popular elements.
         Menu, sliders, buttons, inputs etc. are all here. Just dive in!</p>
         <BasicButtons1 btnText="Browse Components " />
      </Paper>
     
    </Box>
  );
}


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 620,
  height: 760,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

 function Variants() {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="outlined">
        <div style={{display: "flex", justifyContent: "space-around", marginTop: 15}}>
          <BasicButtons3 btnText="+ Add To Cart"  />
          <BasicButtons2  btnText="Upload"  />
          <button style={{borderRadius: "25px", width: "50px", height: "50px", color: "white", backgroundColor: "#006c9c", border: "none"}}>
           <SubscriptionsRoundedIcon />
          </button>
          <CircularDeterminate />
        </div>

        <div style={{display: "flex", justifyContent: "space-around", marginTop: 20}}>
           <BasicTabs />
           <ToggleButtonNotEmpty />
        </div>

        <div style={{display: "flex", justifyContent: "space-around", marginTop: 15}}>
           <SizeAvatars />
           <GroupAvatars />
           <CustomizedTooltips />
           <BasicRating />
        </div>
        
        <div style={{display: "flex", justifyContent: "space-around", marginTop: 15}}>
           <SliderSizes />
           <ActionAlerts />
        </div>
           
          <div style={{display: "flex", justifyContent: "space-around", marginTop: 15}}>
          <RecipeReviewCard />
           <div style={{display: "flex", flexDirection: "column", marginLeft: "5px"}}>
           <CustomizedSwitches/>
           <Checkboxes />
           <RadioButtons />
           <TextFields />
           <NativeSelectDemo />
           </div>
          </div>
      </DemoPaper>
    </Stack>
  );
}







 function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], backgroundSize: "cover", backgroundRepeat: "no-repeat" }} aria-label="recipe">
            <img style={{ width: "40px", height: "40px"}} src={Img6} />
          </Avatar>
        }
        title="Jayvion Simon"
        subheader="California, United States"
      />
      <CardMedia
        component="img"
        height="194"
        image={Img3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         <SmsRoundedIcon style={{borderRadius: "10px"}} />
      </CardActions>
    </Card>
  );
}



const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 25,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FA541C',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#FA541C',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#FA541C',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


 function CustomizedSwitches() {
  return (
    <>
    <FormGroup>
     
     <FormControlLabel
       control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
       label= "Switch"
       style={{ marginLeft: '8px' }}
       >
       </FormControlLabel>
   </FormGroup>
    </>
  );
}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" style={{ color: '#FA541C' }}/>
      <span style={{ marginLeft: '8px' }}>Checkbox</span>
    </div>
  );
}


function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <Radio {...controlProps('a')} size="small"  style={{ color: '#FA541C' }} />
      <span style={{ marginLeft: '5px' }}>Radio Button</span>
    </div>
  );
}








function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, width: 300, height: 700 }}>
      <CardContent>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography sx={{ fontSize: 24, fontWeight: "bolder" }} color="text.secondary" gutterBottom>
        {props.cardName}
        </Typography>
        <Typography variant="h5" component="div">
        {props.price}
        </Typography>
        </div>
        <Typography  sx={{ mb: 1.5 }} color="text.secondary">
          <img src={props.Image} width={"25px"} height={"30px"} alt="" />
        </Typography>
        <Typography variant="body2">
        <IconAlerts />
          <br /> 
      {props.cardName === 'STANDARD' && <BasicButtons1 btnText="Choose Package" />}
      {props.cardName === 'PLUS' && <BasicButtons2 btnText="Choose Package" />}
      {props.cardName === 'EXTENDED' && <BasicButtons3 btnText="Choose Package" />}

          <UnderlineLink />
        </Typography>
      </CardContent>
    </Card>
  );
}



function Paper1() {
  return (
    
      <Paper elevation={0} style={{display: "flex", justifyContent: "space-around", alignItems: "center",  paddingLeft: '90px'}}>
      <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="h2" marginBottom="1rem">Create Your Website Today with <span style={{color: 'orangered'}}>ZONE</span></Typography>
        <Typography marginBottom="1rem">
        The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.
        </Typography>
        <BasicButtons2 btnText="Figma Workspace" >
      </BasicButtons2>
        AVAILABLE FOR
        <Typography style={{color: 'gray', fontSize: '15px', display: 'flex', justifyContent: 'space-around', width: '250px'}} marginBottom="1rem"  marginTop="1rem">
          <img src={Js} alt="" style={{width: 25, height: 25}} />
          <img src={Ts} alt="" style={{width: 25, height: 25}} />
          <img src={Figma} alt="" style={{width: 25, height: 25}} />
          <img src={NextJs} alt="" style={{width: 25, height: 25}} />
          <img src={Vite} alt="" style={{width: 25, height: 25}} />
        </Typography>
        </Box>
        <Box>
        <img src={Img7} alt="img" width={'999'} height={'600'} />
      </Box>
    </Paper>
    
  );
}




function Card2() {
  return (
  <div style={{width: '75%', height: '50%', alignSelf: 'center'  }}>
      <Card style={{backgroundColor: 'ghostwhite', display: "flex", justifyContent: 'center',
       alignItems: 'center', borderRadius: "10px", marginTop: "10%",  minWidth: 275}}> 
      <CardContent>
        <Typography variant="p" sx={{ fontSize: 14, fontWeight: 'bolder' }} color="text.secondary" gutterBottom>
        PERFECT COMBINATION
        </Typography>
        <Typography variant="h4" fontWeight={'bold'} component="div">
        Looking For a Dashboard Template?
        </Typography>
        <Typography variant="p" sx={{ mb: 1.5 }} color="text.secondary">
        Minimal UI Kit is a professional dashboard used by many of our clients.
        </Typography>
        <Typography variant="body2">
          
          <br />
        </Typography>
      <CardActions>
      <BasicButtons1 btnText="Visit Minimal Dashboard"  />
      </CardActions>
      </CardContent>
      {/* <CardMedia
              component="img"
              height="500"
              image={Img2}
              alt="img"
              textAlign="end"
            /> */}
      <img src={Img2}  style={{textAlign: "end", width: "800px"}} alt="" />
    </Card>
  </div>
  );
}





export {OutlinedCard, Card1, SimplePaper, Variants, BasicCard, Paper1, Card2}