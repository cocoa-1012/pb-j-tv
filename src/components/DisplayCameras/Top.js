import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React, { useState } from 'react';
const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box component='div' sx={{ borderBottom: '1px solid green', pb: '10px' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={{ xs: 'center' }}
        >
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography variant='h4' gutterBottom component='div'>
              Display Configuration
            </Typography>
            <Typography variant='body1' gutterBottom component='div'>
              30 Cams max
            </Typography>
          </Stack>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Stack direction='row' spacing={0} alignItems='center'>
              <Box component='p'>Display Slide Show</Box>
              <Checkbox
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
              />
            </Stack>
            <div>
              <Button
                variant='contained'
                color='secondary'
                sx={{ textTransform: 'none' }}
              >
                <Stack spacing={1} direction='row'>
                  <AddIcon />
                  <span>Add ip Cams</span>
                </Stack>
              </Button>
            </div>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Top;
