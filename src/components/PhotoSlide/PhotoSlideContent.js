import { Box } from '@mui/material';
import React from 'react';
import Content from './Content';
import Top from './Top';

const PhotoSlideContent = () => {
  return (
    <Box sx={{ my: '20px' }}>
      <Top />
      <Content />
    </Box>
  );
};

export default PhotoSlideContent;
