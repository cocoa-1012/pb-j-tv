import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCamerasAction,
  removeCamerasAction,
  updateCameraStatusAction,
} from '../../store/cameras/camerasAction';

const CamsTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const data = useSelector((state) => state.cameras.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCamerasAction());
  }, [dispatch]);

  const columns = [
    { headerName: 'WebCams:', field: 'cameraName', width: 250 },
    { headerName: 'IP Addresses', field: 'ipAddress', width: 200 },
    {
      headerName: 'Enable',
      field: 'status',
      sortable: false,
      width: 100,
      renderCell: (props) => {
        const { status, id } = props.row;
        const update = () => {
          dispatch(updateCameraStatusAction({ id, type: 'status' }, () => {}));
        };
        return (
          <>
            <Button
              size='small'
              variant='contained'
              color={status ? 'primary' : 'error'}
              onClick={update}
            >
              {status ? 'Active' : 'Deactive'}
            </Button>
          </>
        );
      },
    },
    {
      headerName: 'Blank',
      field: 'blankStatus',
      sortable: false,
      width: 100,
      renderCell: (props) => {
        const { blankStatus, id } = props.row;

        const update = () => {
          dispatch(
            updateCameraStatusAction({ id, type: 'blankStatus' }, () => {})
          );
        };
        return (
          <>
            <Button
              size='small'
              variant='contained'
              color={blankStatus ? 'primary' : 'error'}
              onClick={update}
            >
              {blankStatus ? 'Active' : 'Deactive'}
            </Button>
          </>
        );
      },
    },

    {
      headerName: 'Option',
      width: 100,
      sortable: false,
      renderCell: ({ row }) => {
        const styles = {
          color: 'red',
          cursor: 'pointer',
          ':hover': { color: '#6c94dc' },
        };

        const remove = () => {
          console.log('remove');
          dispatch(removeCamerasAction(row.id));
        };

        return (
          <Stack direction={'row'} spacing={1}>
            <Box component={EditIcon} sx={styles} />
            <Box component={CloseIcon} onClick={remove} sx={styles} />
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
            rows={data}
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

export default CamsTable;
