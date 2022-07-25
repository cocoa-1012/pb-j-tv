import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const Content = () => {
  const theme = useTheme();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    clearErrors,
    setError,
    watch,
  } = useForm({
    defaultValues: {
      sliderTime: 3,
      image: null,
    },
  });

  const submitHandler = (values) => {
    if (!values.image) {
      setError('image', { message: 'This field is required' });
      return;
    }
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack
          justifyContent={'end'}
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={2}
          alignItems={{
            xs: 'start',
            sm: 'end',
          }}
        >
          <div>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Typography variant='body1' component='p'>
                Slider Time
              </Typography>
              <FormControl
                className='form-control1'
                sx={{
                  width: {
                    xs: '100%',
                    sm: 110,
                  },
                }}
                size='small'
                fullWidth
              >
                <Select
                  input={<OutlinedInput />}
                  placeholder='Select'
                  fullWidth
                  className='select-control1'
                  size='small'
                  {...register('sliderTime')}
                  value={watch('sliderTime')}
                  onChange={(e) => setValue('sliderTime', e.target.value)}
                >
                  {times.map((t) => (
                    <MenuItem
                      key={Math.random()}
                      value={t}
                      style={getStyles(t, watch('sliderTime'), theme)}
                    >
                      {t} Sec
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </div>
          <div>
            <input
              accept='image/*'
              id='raised-button-file'
              type='file'
              onChange={(e) => {
                setValue('image', e.target.files[0]);
                clearErrors('image');
              }}
            />
            {watch('image') && (
              <FormHelperText sx={{ color: 'red' }}>
                {errors.image.message}
              </FormHelperText>
            )}
          </div>
          <div>
            <Button type='file' variant='contained'>
              Upload
            </Button>
          </div>
        </Stack>
      </form>

      <div>
        <Grid container sx={{ my: 3 }} columnGap={{ xs: '10px', md: '0' }}>
          <Grid xs={12} md={8}>
            <div>
              <Box
                component={'img'}
                src='https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                sx={{
                  width: '100%',
                  height: {
                    xs: '200px',
                    sm: '400px',
                    xl: '500px',
                  },
                  my: {
                    xs: '10px',
                    md: '0',
                  },
                }}
              />
            </div>
            <Stack direction='row' justifyContent={'space-between'}>
              <div>
                <Button variant='contained' color='error'>
                  {' '}
                  Delete{' '}
                </Button>
              </div>
              <div>
                <Button variant='contained'> Active </Button>
              </div>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                boxSizing: 'border-box',
                pl: {
                  xs: 0,
                  md: 2,
                },
                my: {
                  xs: '10px',
                  md: '0',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: '200px',
                    sm: '400px',
                    xl: '500px',
                  },
                  background: 'green',
                  mb: 2,
                }}
              ></Box>
              <Stack direction='row' justifyContent={'space-between'}>
                <div>
                  <Button variant='contained' color='error'>
                    {' '}
                    Delete{' '}
                  </Button>
                </div>
                <div>
                  <Button variant='contained'> Active </Button>
                </div>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const times = [3, 6, 9, 15, 20, 25, 30, 40, 50, 60];

function getStyles(value, sliderTime, theme) {
  return {
    fontWeight:
      sliderTime === value
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default Content;
