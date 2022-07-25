import { Box, Stack } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';

const TopNavBar = ({ isNavShow }) => {
  const link = {
    textDecoration: 'none',
    margin: {
      xs: '0 2px',
      sm: '0 10px',
      md: '0 15px',
    },
  };
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'flex',
        },
        justifyContent: {
          xs: 'normal',
          sm: 'end',
        },
      }}
    >
      <Stack
        spacing={0}
        direction='row'
        divider={<Divider />}
        git
        sx={{ flexWrap: 'wrap', gap: { xs: '10px', sm: '0' } }}
      >
        {isNavShow && (
          <Box component={Link} to='/' sx={link}>
            Return to Master
          </Box>
        )}
        {isNavShow && (
          <Box component={Link} to='/' sx={link}>
            Lobby Display
          </Box>
        )}
        {isNavShow && (
          <Box component={Link} to='/' sx={link}>
            Back Display
          </Box>
        )}

        <Box component={Link} to='/' sx={link}>
          Logout
        </Box>
      </Stack>
    </Box>
  );
};
const Divider = () => {
  return '|';
};

export default TopNavBar;
