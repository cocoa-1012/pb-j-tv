import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import React from 'react';
import PriorityAlert from './PriorityAlert';

import TodaysMessages from './TodaysMessages';
import UpcomingScheduledMessages from './UpcomingScheduledMessages';

const DashboardContent = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Typography variant='h4' sx={{ mb: 2 }}>
          Dashboard
        </Typography>
        <Grid container>
          <Grid xs={12} md={4}>
            <PriorityAlert />
          </Grid>
          <Grid
            xs={12}
            md={8}
            sx={{
              boxSizing: 'border-box',
              paddingLeft: { xs: 0, md: '10px' },
              mt: { xs: 3, md: 0 },
            }}
          >
            <Stack spacing={4}>
              <TodaysMessages />
              <UpcomingScheduledMessages />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardContent;
