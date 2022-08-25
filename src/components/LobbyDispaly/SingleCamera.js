import { Box } from '@mui/material';
import React from 'react';
const file = 'files/camsFront.html';

const SingleCamera = ({ ipAddress, height }) => {
  return (
    <Box
      sx={{
        width: '100%',
        boxSizing: 'border-box',
      }}
      className=''
      as='div'
    >
      <Box
        sx={{
          border: '1px solid #000',
          height,
        }}
      >
        <iframe
          src={`${file}?${ipAddress}`}
          title={ipAddress}
          frameborder='0'
          width='100%'
        ></iframe>
      </Box>
    </Box>
  );
};

export default SingleCamera;
