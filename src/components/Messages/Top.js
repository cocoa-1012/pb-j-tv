import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
const Top = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={12} md={9}>
          <Typography variant='h4' gutterBottom component='div'>
            Messages
          </Typography>
        </Grid>
        <Grid xs={12} md={3}>
          <Stack direction='row' spacing={2} sx={{ ml: '10px' }}>
            <div>
              <FolderCopyIcon />
            </div>
            <div>
              <Button variant='contained'>Configure</Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
