import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import TopNavBar from './TopNavBar';
const logo = 'http://dev.preschoolreports.com/images/loginlogo.png';
const Header = ({ isNavShow = true }) => {
  return (
    <Box component={'div'} sx={{ background: '#e1d0e4', py: 2 }}>
      <Container>
        <TopNavBar isNavShow={isNavShow} />
        <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
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
            {isNavShow && <Navbar />}
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
