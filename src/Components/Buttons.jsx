import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


 function BasicButtons1(props) {
  return (
    <Stack spacing={2} direction="row" alignItems={'center'}>
      <Button variant="outlined" sx={{
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'capitalize'
          },
          borderColor: "lightslategray",
          color: 'black',
          fontWeight: 'bold',
          textTransform: 'capitalize'
        }}>{props.btnText}<span style={{fontSize: "15px", fontWeight: "lighter"}}>&#62;</span></Button>
    </Stack>
  );
}

function BasicButtons2(props) {
  return (
    <Stack spacing={2} direction="row" alignItems={'center'}>
      <Button variant="outlined"  sx={{
          '&:hover': {
            backgroundColor: "grey.800",
            color: "white",
            fontWeight: 'bold',
            textTransform: 'capitalize',
            border: "none",
            display: "inline-flex"
          },
          backgroundColor: "black",
          color: "white",
          fontWeight: 'bold',
          textTransform: 'capitalize',
          border: "none",
          display: "inline-flex"
        }}>{props.btnText}</Button>
    </Stack>
  );
}

function BasicButtons3(props) {
  return (
    <Stack spacing={2} direction="row" alignItems={'center'}>
      <Button variant="outlined" sx={{
          '&:hover': {
            backgroundColor: "grey.800",
            color: "white",
            fontWeight: 'bold',
            textTransform: 'capitalize',
            border: "none",
            display: "inline-flex"
          },
          backgroundColor: "orangered",
          color: "white",
          fontWeight: 'bold',
          textTransform: 'capitalize',
          border: "none",
          display: "inline-flex"
        }}>{props.btnText}</Button>
    </Stack>
  );
}



const preventDefault = (event) => event.preventDefault();

function UnderlineLink() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'end',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" color={'gray'} mt={5} ml={4} underline="hover">
        {'Read License >'}
      </Link>
    </Box>
  );
}

export {BasicButtons1, BasicButtons2, BasicButtons3, UnderlineLink}