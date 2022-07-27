import { Box, Paper, TableContainer, Typography } from '@mui/material';

import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const UpcomingScheduledMessages = () => {
  return (
    <Box sx={styles.main}>
      <Typography variant='h6' sx={{ mb: 1 }} color='#fff'>
        Upcoming Scheduled Messages
      </Typography>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.content}>
          <Typography variant='subtitle1' align='center' sx={{ my: 1 }}>
            Title
          </Typography>

          <div>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align='center'>A</TableCell>
                    <TableCell align='center'>B</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3].map((row, index) => (
                    <TableRow
                      key={row}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {index + 1}
                      </TableCell>
                      <TableCell align='right'></TableCell>
                      <TableCell align='right'></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingScheduledMessages;

const styles = {
  main: {
    bgcolor: '#00e0fd',
    boxSizing: 'border-box',
    padding: '12px',
    borderRadius: '10px',
  },
  contentWrapper: {
    bgcolor: 'white',
    boxSizing: 'border-box',
    padding: '20px',
    //   minHeight: 400,
    borderRadius: '10px',
  },
  content: { borderTop: '5px solid #974cfa', borderRadius: '10px' },
};
