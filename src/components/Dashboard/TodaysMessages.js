import { Box, Paper, TableContainer, Typography } from '@mui/material';

import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import moment from 'moment';
import { useSelector } from 'react-redux';

const TodaysMessages = () => {
  const messages = useSelector((state) => {
    if (state.messages.length <= 0) return [];
    return state.messages
      .reduce((acc, cur) => {
        if (moment(new Date()).isSame(moment(cur.dateTime), 'day')) {
          acc.push(cur);
        }
        return acc;
      }, [])
      .sort((a, b) => {
        return (
          new moment(a.dateTime).format('X') -
          new moment(b.dateTime).format('X')
        );
      });
  });
  return (
    <Box sx={styles.main}>
      <Typography variant='h6' sx={{ mb: 1 }} color='#fff'>
        Today's Messages
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
                  {messages.map((row, index) => (
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
                      <TableCell align='center'>{row.message}</TableCell>
                      <TableCell align='center'>
                        {moment(row.dateTime).format('hh:mm a | MMM D, YYYY')}
                      </TableCell>
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

export default TodaysMessages;

const styles = {
  main: {
    bgcolor: '#382858',
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
