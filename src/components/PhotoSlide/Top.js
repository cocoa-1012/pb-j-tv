import { Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
const Top = () => {
  const [slideShowPosition, setSlideShowPosition] = useState('');
  const toggle = (value) => {
    setSlideShowPosition(value);
    localStorage.setItem('slideShowPosition', value);
  };

  useEffect(() => {
    setSlideShowPosition(localStorage.getItem('slideShowPosition') || '');
  }, []);

  return (
    <div>
      <Grid container sx={{ borderBottom: '1px solid green', mb: '10px' }}>
        <Grid xs={12} md={9}>
          <Typography variant='h4' gutterBottom component='div'>
            Photo Slide
          </Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Stack direction='row' spacing={2} sx={{ ml: '10px' }}>
            <Button
              variant='contained'
              color={slideShowPosition === 'top' ? 'primary' : 'secondary'}
              onClick={() => toggle('top')}
            >
              Top
            </Button>
            <Button
              variant='contained'
              color={slideShowPosition === 'bottom' ? 'primary' : 'secondary'}
              onClick={() => toggle('bottom')}
            >
              Bottom
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
