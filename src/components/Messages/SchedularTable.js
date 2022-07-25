import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessageAction } from '../../store/messages/messageAction';

const SchedularTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const messages = useSelector((state) => {
    // return whatever data you want from redux state
    return [];
  });

  const dispatch = useDispatch();

  const columns = [
    { headerName: 'Message:', field: 'message', width: 250 },
    { headerName: 'Reoccur', field: 'reoccur', width: 200 },
    { headerName: 'Date and Time', field: 'dateTime', width: 200 },
    { headerName: 'Days', field: 'days', width: 200 },
    { headerName: 'Duration', field: 'duration', width: 200 },
    {
      headerName: 'Action',
      width: 100,
      sortable: false,
      renderCell: () => {
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
              onClick={() => dispatch(removeMessageAction())}
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
