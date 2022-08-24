import { Box, Typography } from '@mui/material';
import React from 'react';
import CamDisplayLayoutItem from './CamDisplayLayoutItem';
const layoutItems = [
  {
    id: 1,
    rowCount: 1,
    columnCount: 1,
    orientation: 'horizontal',
  },
  {
    id: 2,
    rowCount: 3,
    columnCount: 3,
    orientation: '',
  },
  {
    id: 3,
    rowCount: 3,
    columnCount: 4,
    orientation: '',
  },
  {
    id: 4,
    rowCount: 4,
    columnCount: 4,
    orientation: '',
  },
  {
    id: 5,
    rowCount: 1,
    columnCount: 1,
    orientation: '',
  },
  {
    id: 6,
    rowCount: 4,
    columnCount: 2,
    orientation: '',
  },
];

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
          {layoutItems.map((item) => (
            <CamDisplayLayoutItem {...item} key={item.id} />
          ))}
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
