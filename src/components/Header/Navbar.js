import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
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
  const [isShow, setIsShow] = useState();
  const navigate = useNavigate();
  return (
    <nav>
      <Stack
        spacing={{
          xs: 0,
          sm: 1,
        }}
        direction={{ xs: 'row', sm: 'row' }}
        sx={{
          flexWrap: 'wrap',
          gap: '10px',
          display: { xs: 'none', md: 'flex' },
        }}
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
      <Box
        component={'div'}
        sx={{
          display: { xs: 'block', md: 'none' },
          ':hover': { cursor: 'pointer' },
        }}
      >
        <MenuIcon onClick={() => setIsShow(true)} />
      </Box>
      <>
        <Drawer anchor={'left'} open={isShow} onClose={() => setIsShow(false)}>
          <Box
            sx={{
              width: 200,
            }}
            role='presentation'
            onClick={() => setIsShow(false)}
            onKeyDown={() => setIsShow(false)}
          >
            <List>
              {LINKS.map((item) => (
                <>
                  <ListItem
                    key={Math.random()}
                    disablePadding
                    onClick={() => navigate(item.url)}
                  >
                    <ListItemButton>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    </nav>
  );
};

export default Navbar;
