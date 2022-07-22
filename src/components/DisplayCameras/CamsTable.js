import { faker } from '@faker-js/faker';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
const rows = Array.from(new Array(25).fill(null)).map((_, index) => {
  return {
    id: shortid(),
    name: faker.company.bs(),
    ip: faker.internet.ip(),
    enable: Math.ceil(Math.random() * 2) === 1,
    blank: Math.ceil(Math.random() * 2) === 1,
  };
});

const CamsTable = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState([]);

  useEffect(() => setData(rows), []);

  const columns = [
    { headerName: 'WebCams:', field: 'name', width: 250, flex: 1 },
    { headerName: 'IP Addresses', field: 'ip', width: 150, flex: 1 },
    {
      headerName: 'Enable',
      field: 'enable',
      sortable: false,
      width: 100,
      renderCell: (props) => {
        return (
          <>
            <Button size='small' variant='contained'>
              Active
            </Button>
          </>
        );
      },
    },
    {
      headerName: 'Blank',
      field: 'blank',
      sortable: false,
      width: 100,
      renderCell: (props) => {
        return (
          <>
            <Button size='small' variant='contained'>
              Active
            </Button>
          </>
        );
      },
    },

    {
      headerName: 'Option',
      width: 150,
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
            <Box component={CloseIcon} sx={styles} />
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
