import { Container } from '@mui/material';
import React from 'react';
import CamsTable from './CamsTable';
import Top from './Top';

const DisplayCamerasContent = () => {
  return (
    <Container sx={{ my: 3 }}>
      <Top />
      <CamsTable />
    </Container>
  );
};

export default DisplayCamerasContent;
