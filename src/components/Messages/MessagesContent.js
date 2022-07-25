import { Box, Typography } from '@mui/material';
import React from 'react';
import MessagesForm from './MessagesForm';
import SchedularTable from './SchedularTable';
import SchedulerMessageForm from './SchedulerMessageForm';
import Top from './Top';

const MessagesContent = () => {
  return (
    <Box sx={{ my: 3 }}>
      <Top />
      <MessagesForm />
      <>
        <Typography
          variant='h4'
          gutterBottom
          component='div'
          sx={{ borderBottom: ' 1px solid green' }}
        >
          Scheduler
        </Typography>

        <SchedulerMessageForm />
      </>
      <>
        <Typography
          variant='h4'
          gutterBottom
          component='div'
          sx={{ borderBottom: ' 1px solid green', mt: 3 }}
        >
          Scheduled Messages
        </Typography>
        <SchedularTable />
      </>
    </Box>
  );
};

export default MessagesContent;
