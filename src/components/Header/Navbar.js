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
    url: '/display-cameras',
  },
];

const Navbar = () => {
  return (
    <nav>
      <Stack
        spacing={{
          xs: 0,
          sm: 1,
        }}
        direction={{ xs: 'row', sm: 'row' }}
        sx={{ flexWrap: 'wrap', gap: '10px' }}
      >
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

export default Navbar;
