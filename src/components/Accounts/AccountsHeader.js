import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import FilterSelect from './FilterSelect';

const AccountsHeader = ({ search, setSearch }) => {
  return (
    <div>
      <Grid container sx={styles.main} alignItems='end'>
        <Grid xs={12} md={3}>
          <Typography variant='h5' gutterBottom component='div'>
            Accounts
          </Typography>
        </Grid>
        <Grid xs={12} md={9}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent='end'
          >
            <div>
              <FormControl fullWidth>
                <OutlinedInput
                  size='small'
                  placeholder='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </FormControl>
            </div>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ md: 'end' }}
            >
              <FilterSelect />

              <div>
                <Button variant='contained' color='secondary'>
                  <Stack spacing={1} direction='row'>
                    <AddIcon />
                    <span>Add Account</span>
                  </Stack>
                </Button>
              </div>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountsHeader;

const styles = {
  main: { my: 3, pb: 1, borderBottom: '1px solid green' },
};
