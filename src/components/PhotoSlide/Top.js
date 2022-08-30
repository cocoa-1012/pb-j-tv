import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
const Top = () => {
  const toggle = (value) => {
    localStorage.setItem('slideShowPosition', value);
  };
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
            <Button variant='contained' onClick={() => toggle('top')}>
              Top
            </Button>
            <Button
              variant='contained'
              color='secondary'
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
