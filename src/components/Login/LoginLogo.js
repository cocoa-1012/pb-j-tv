import { Box, Grid } from '@mui/material';
import React from 'react';

import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  main: {
    height: 'auto',
  },
  '@media screen and (min-width: 900px)': {
    main: {
      height: '100vh',
    },
  },
});
const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png';
const LoginLogo = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      sx={{
        background: `linear-gradient(139deg,#e1d0e4,#e1d0e4, #fcf9fd)`,
        py: '30px',
      }}
      className={classes.main}
      xs={12}
      height={'100vh'}
    >
      <Box
        component='div'
        sx={{
          height: 300,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
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
