import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { Link } from 'react-router-dom';

const LINKS = [
  {
    label: 'Dashboard',
    url: '/dashboard',
  },
  {
    label: 'Message',
    url: '/message',
  },
  {
    label: 'Photo Slide',
    url: '/photo-slide',
  },
  {
    label: 'Social',
    url: '/social',
  },
  {
    label: 'Display Cams',
    url: '/display-cams',
  },
];

const Navbar = () => {
  return (
    <nav>
      <Stack spacing={1} direction='row'>
        {LINKS.map((link) => {
          return (
            <Box
              component={Link}
              sx={{ textDecoration: 'none', color: 'red' }}
              to={link.url}
            >
              <Button variant='contained'>{link.label}</Button>
            </Box>
          );
        })}
      </Stack>
    </nav>
  );
};
const Divider = () => {
  return '|';
};

export default Navbar;
