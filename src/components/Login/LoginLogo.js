import { Box, Grid } from '@mui/material';
import React from 'react';


const logo = 'http://dev.preschoolreports.com/images/loginlogo.png';
const LoginLogo = () => {
 
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      sx={{
        background: `linear-gradient(139deg,#e1d0e4,#e1d0e4, #fcf9fd)`,
        py: '30px',
        height: {
          xs: 'auto',
          md: '100vh',
        },
      }}
      xs={12}
      height={'100vh'}
    >
      <Box
        component='div'
        sx={{
          height: 300,
          width: 350,
          maxHeight: { xs: 233, md: 350 },
          maxWidth: { xs: 350, md: 300 },
        }}
      >
        <Box
          component='img'
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
          alt='logo'
          src={logo}
        />
      </Box>
    </Grid>
  );
};

export default LoginLogo;
