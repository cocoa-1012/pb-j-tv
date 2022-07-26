import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import logo from '../../assets/images/logo.png';
import Navbar from './Navbar';
import TopNavBar from './TopNavBar';

const Header = ({ isNavShow = true }) => {
  return (
    <Box
      component={'div'}
      sx={{ background: '#e1d0e4', py: 2, px: { xs: 2, sm: 0 } }}
    >
      <Container disableGutters={true}>
        <TopNavBar isNavShow={isNavShow} />
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={{
            xs: 0,
            sm: 4,
          }}
          sx={{
            alignItems: {
              xs: 'start',
              sm: 'center',
            },
          }}
        >
          <Box
            component='div'
            sx={{
              width: 120,
              height: 120,
              maxHeight: { xs: 233, md: 150 },
              maxWidth: { xs: 350, md: 250 },
            }}
          >
            <Box
              component='img'
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              }}
              alt='logo'
              src={logo}
            />
          </Box>
          <div>
            <Typography
              variant='h6'
              component={'h3'}
              sx={{ pb: 1, color: '#1f635e' /*fontFamily: 'QwitcherBychen'*/ }}
            >
              PB&J Tv Master Admin Manager
            </Typography>
            <Navbar isNavShow={isNavShow} />
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
