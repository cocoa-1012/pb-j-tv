import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { Link } from 'react-router-dom';

const AccountTable = ({ data }) => {
  const [pageSize, setPageSize] = React.useState(10);

  const columns = [
    {
      headerName: 'Center Name:',
      field: 'centerName',
      width: 250,

      renderCell: (props) => {
        const { formattedValue, row } = props;

        return (
          <>
            <Link to={`/item/${row.id}`}>{formattedValue}</Link>
          </>
        );
      },
    },
    { headerName: 'Username:', field: 'username', width: 150 },
    { headerName: 'Password:', field: 'password', sortable: false, width: 100 },
    { headerName: 'Contact #:', field: 'contact', width: 200 },
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
            <Link to={`/item/${row.id}`}>View Page</Link>
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
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
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
        </div>
      </div>
    </Box>
  );
};

export default AccountTable;
