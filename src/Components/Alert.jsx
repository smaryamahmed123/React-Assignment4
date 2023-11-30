import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';

function ActionAlerts() {
  return (
    <Stack sx={{ width: '50%' }} spacing={2}>
      <Alert iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }} onClose={() => {}}>This is a <strong>success</strong> alert</Alert>
      
    </Stack>
  );
}


 function IconAlerts(props) {
  return (
    <Stack  spacing={2} style={{}} >
     
      <Alert sx={{ color: "orangered", backgroundColor: 'white' }}
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" sx={{ color: "orangered" }}/>,
        }}
      >
        One end products
      </Alert>
      <Alert sx={{ color: "orangered", backgroundColor: 'white' }}
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" sx={{ color: "orangered" }} />,
        }}
      >
      12 months updates
      </Alert>
      <Alert sx={{ color: "orangered", backgroundColor: 'white' }}
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" sx={{ color: "orangered" }}/>,
        }}
      >
      6 months of support
      </Alert>
      <Alert sx={{ color: "orangered", backgroundColor: 'white', borderBottom: " 1px dotted #e7e7e7" }}
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" sx={{ color: "orangered" }}/>,
        }}
      >
        JavaScript version
      </Alert>
      <Alert sx={{ color: "gray", backgroundColor: 'white' }}
        iconMapping={{
          success: <CancelIcon  fontSize="inherit" sx={{ color: 'gray'  }}/>,
        }}
      >
      TypeScript version
      </Alert>
      <Alert sx={{ color: "gray" , backgroundColor: 'white'}}
        iconMapping={{
          success: <CancelIcon  fontSize="inherit" sx={{ color: 'gray'  }}/>,
        }}
      >
      Design resources
      </Alert>
      <Alert sx={{ color: "gray", backgroundColor: 'white' }}
        iconMapping={{
          success: <CancelIcon  fontSize="inherit" sx={{ color: 'gray'  }}/>,
        }}
      >
      
      Commercial applications
      </Alert>
      
    </Stack>
  );
}

export  {ActionAlerts, IconAlerts}





