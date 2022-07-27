import { Box, Typography } from '@mui/material';

import React from 'react';

const PriorityAlert = () => {
  return (
    <Box sx={styles.main}>
      <Typography variant='h6' sx={{ mb: 1 }}>
        Priority Alert
      </Typography>
      <Box sx={styles.title}>
        <Typography variant='subtitle1'>No check Ins yet</Typography>
      </Box>
    </Box>
  );
};

export default PriorityAlert;

const styles = {
  main: {
    bgcolor: 'yellow',
    boxSizing: 'border-box',
    padding: '12px',
    borderRadius: '10px',
  },
  title: {
    bgcolor: 'white',
    boxSizing: 'border-box',
    padding: '12px',
    minHeight: 500,
    borderRadius: '10px',
  },
};
