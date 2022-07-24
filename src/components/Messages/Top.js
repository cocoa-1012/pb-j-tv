import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ConfigureForm from './ConfigureForm/ConfigureForm';
const Top = () => {
  const [open, setOpen] = useState(false);
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
              <Button variant='contained' onClick={() => setOpen(true)}>
                Configure
              </Button>
            </div>
          </Stack>
        </Grid>
      </Grid>

      <ConfigureForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default Top;
