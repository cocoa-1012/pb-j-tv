import { Box, Typography } from '@mui/material';

import React from 'react';

const PriorityAlert = () => {
  return (
    <Box
      sx={{
        bgcolor: 'yellow',
        boxSizing: 'border-box',
        padding: '12px',
        borderRadius: '10px',
      }}
    >
      <Typography variant='h6' sx={{ mb: 1 }}>
        Priority Alert
      </Typography>
      <Box
        sx={{
          bgcolor: 'white',
          boxSizing: 'border-box',
          padding: '12px',
          minHeight: 500,
          borderRadius: '10px',
        }}
      >
        <Typography variant='subtitle1'>No check Ins yet</Typography>
      </Box>
    </Box>
  );
};

export default PriorityAlert;
