import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessageAction } from '../../store/messages/messageAction';
const SchedularTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const messages = useSelector((state) => {
    // return whatever data you want from redux state

    if (state.messages.length <= 0) return [];

    return state.messages.reduce((acc, cur, index) => {
      const condition = moment().isBefore(cur.dateTime, 'day');
      if (condition) acc.push(cur);

      return acc;
    }, []);
  });

  const dispatch = useDispatch();

  const columns = [
    { headerName: 'Message:', field: 'message', width: 250 },
    { headerName: 'Reoccur', field: 'reoccur', width: 200 },
    {
      headerName: 'Date and Time',
      field: 'dateTime',
      width: 200,
      renderCell: ({ value }) => {
        return <p>{moment(value).format('MMM D, YYYY')}</p>;
      },
    },
    { headerName: 'Days', field: 'days', width: 200 },
    { headerName: 'Duration', field: 'duration', width: 200 },
    {
      headerName: 'Action',
      width: 100,
      sortable: false,
      renderCell: ({ row }) => {
        const styles = {
          color: 'red',
          cursor: 'pointer',
          ':hover': { color: '#6c94dc' },
        };
        return (
          <Stack direction={'row'} spacing={1}>
            <Box component={EditIcon} sx={styles} />
            <Box
              component={CloseIcon}
              sx={styles}
              onClick={() => dispatch(removeMessageAction(row.id))}
            />
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={messages}
            columns={columns}
            disableSelectionOnClick
            disableColumnMenu
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30, 50]}
            pagination
            style={{ border: 'none' }}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SchedularTable;
