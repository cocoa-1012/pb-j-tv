import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storeInfoLocalStorage } from '../../store/account/accountAction';

const AccountTable = ({ data }) => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const columns = [
    {
      headerName: 'Center Name:',
      field: 'username',
      width: 250,

      renderCell: (props) => {
        const { formattedValue, row } = props;

        return (
          <>
            <Link to={`/dashboard`} onClick={storeInfoLocalStorage(row.id)}>{formattedValue}</Link>
          </>
        );
      },
    },
    { headerName: 'Contact #:', field: 'contactno', width: 200 },
    { headerName: 'Email:', field: 'email', width: 200 },
    { headerName: 'Location:', field: 'location', width: 150 },
    {
      headerName: 'View Page:',
      field: 'viewPage',
      width: 100,
      sortable: false,
      renderCell: (props) => {
        const { row } = props;

        return (
          <>
            <Link to={`/item`}>View Page</Link>
          </>
        );
      },
    },

    {
      headerName: 'Delete',
      width: 100,
      renderCell: () => {
        return (
          <div className='flex gap-x-1'>
            <Button color='error'>
              <CloseIcon />
            </Button>
          </div>
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
            pageSize={itemPerPage}
            onPageSizeChange={(newPageSize) => setItemPerPage(newPageSize)}
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

export default AccountTable;
