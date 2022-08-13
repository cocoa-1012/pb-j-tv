import { Box, Typography } from '@mui/material';
import React from 'react';
import CamDisplayLayoutItem from './CamDisplayLayoutItem';
const RightSideBar = () => {
  return (
    <>
      <Box component='div' sx={styles.main}>
        <Typography variant='h4' gutterBottom component='div'>
          Display Layout
        </Typography>
        <Typography
          variant='h6'
          gutterBottom
          component='div'
          sx={{ mb: '12px' }}
        >
          Chose how you want cameras to show on display
        </Typography>
        <div>
          <CamDisplayLayoutItem rowCount={1} column={1} orientation="horizontal" displayId="1"/>
          <CamDisplayLayoutItem rowCount={3} column={3} orientation=""  displayId="2"/>
          <CamDisplayLayoutItem rowCount={3} column={4} orientation=""  displayId="3"/>
          <CamDisplayLayoutItem rowCount={4} column={4} orientation=""  displayId="4"/>
          <CamDisplayLayoutItem rowCount={1} column={1} orientation="vertical"  displayId="5"/>
          <CamDisplayLayoutItem rowCount={4} column={2} orientation=""  displayId="6"/>
        </div>
      </Box>
    </>
  );
};

export default RightSideBar;

const styles = {
  main: {
    width: {
      xs: 280,
      sm: 400,
    },
    boxSizing: 'border-box',
    padding: '10px',
    mb: 5,
  },
};
