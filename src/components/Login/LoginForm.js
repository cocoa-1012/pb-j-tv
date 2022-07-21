import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  OutlinedInput,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: '100vh', boxSizing: 'border-box' }}
    >
      <Grid xs={12} sm={12} md={9}>
        <Typography
          variant='h6'
          component={'h3'}
          sx={{ pb: 1 /*fontFamily: 'QwitcherBychen'*/ }}
        >
          Preschool Reports Communication Platform
        </Typography>
        <Box
          component={'div'}
          sx={{
            border: '1px solid #919095',
            padding: '30px',
            boxSizing: 'border-box',
            borderRadius: '10px',
          }}
        >
          <Grid container>
            <Grid xs={12} sm={8} md={8}>
              <form>
                <div>
                  <Typography
                    variant='h6'
                    component={'h3'}
                    sx={{ mb: 2, color: '#919095' }}
                  >
                    Login Here!
                  </Typography>
                </div>
                {/* username input */}
                <div>
                  <Grid container alignItems={'center'}>
                    <Grid xs={12} sm={3} md={3}>
                      <Typography variant='subtitle1' component={'p'}>
                        Username
                      </Typography>
                    </Grid>
                    <Grid xs={12} sm={9} md={9}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          id='component-outlined'
                          //   value={name}
                          //   onChange={handleChange}

                          size='small'
                        />

                        {/* <FormHelperText sx={{ color: 'red' }}>Error</FormHelperText> */}
                      </FormControl>
                    </Grid>
                  </Grid>
                  {false && (
                    <Grid container sx={{}}>
                      <Grid sm={3}></Grid>
                      <Grid sm={9}>
                        <FormHelperText sx={{ color: 'red' }}>
                          Error
                        </FormHelperText>
                      </Grid>
                    </Grid>
                  )}
                </div>
                {/* password input */}
                <div>
                  <Grid container alignItems={'center'} sx={{ pt: 2 }}>
                    <Grid xs={12} sm={3} md={3}>
                      <Typography variant='subtitle1' component={'p'}>
                        Password
                      </Typography>
                    </Grid>
                    <Grid xs={12} sm={9} md={9}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          id='component-outlined'
                          size='small'
                          //   value={name}
                          //   onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>

                    {false && (
                      <Grid container sx={{}}>
                        <Grid sm={3}></Grid>
                        <Grid sm={9}>
                          <FormHelperText sx={{ color: 'red' }}>
                            Error
                          </FormHelperText>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </div>
                <Box component={'div'} sx={{ my: '5px' }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Remember me'
                    />
                  </FormGroup>
                </Box>
                {/* submit button and forgot password */}
                <Grid container alignItems={'center'} sx={{}}>
                  <Grid xs={3}></Grid>
                  <Grid xs={9}>
                    <Stack
                      direction={'row'}
                      spacing={2}
                      sx={{ alignItems: 'center' }}
                    >
                      <div>
                        <Button
                          variant='contained'
                          size='small'
                          color='primary'
                          type='submit'
                        >
                          Sign In
                        </Button>
                      </div>
                      <div>
                        <Box
                          component={Link}
                          to='/dd'
                          sx={{
                            color: 'red',
                            textDecoration: 'none',
                            textTransform: 'capitalize',
                            transition: 'all 0.5s',
                            ':hover': {
                              color: 'blue',
                            },
                          }}
                        >
                          Forgot your password?
                        </Box>
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Box component={'div'} sx={{ mt: '35px' }}>
            <div>
              <b>Need assistance or training?</b>
              <span>visit your pb&jTV Team at:</span>
              <Link to={'http://pbjtv.zendesk.com'} target={'_blank'}>
                http://pbjtv.zendesk.com
              </Link>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;