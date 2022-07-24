import { Container, Grid } from '@mui/material';
import React from 'react';
import CamsTable from './CamsTable';
import RightSideBar from './RightSideBar';
import Top from './Top';

const DisplayCamerasContent = () => {
  return (
    <Container sx={{ my: 3 }}>
      <Top />
      <Grid container>
        <Grid xs={12} md={8} xl={8}>
          <CamsTable />
        </Grid>
        <Grid xs={12} md={4} xl={3}>
          <RightSideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DisplayCamerasContent;
