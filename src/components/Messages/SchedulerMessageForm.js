import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addMessageAction } from '../../store/messages/messageAction';

const SchedulerMessageForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      days: [],
      customMessage: '',
      reoccur: '1',
      date: null,
      duration: 0,
    },
  });
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    // all values
    console.log(values);
    dispatch(
      addMessageAction(values, (isOk, result) => {
        if (isOk) {
          console.log('ok');
        } else {
          console.log('is not ok.');
          console.log(result);
        }
      })
    );
  };

  const dayChangeHandler = (event, isChecked) => {
    const value = event.target.value;
    if (isChecked && !watch('days').includes(value)) {
      setValue('days', [...watch('days'), value]);
    } else {
      const days = watch('days').filter((d) => d !== value);
      setValue('days', days);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Grid container>
        <Grid xs={12} md={3}>
          <Layout text={'Message'}>
            <OutlinedInput
              placeholder='Automated Messages:'
              multiline
              rows={5}
              size='small'
              fullWidth
              {...register('customMessage', {
                required: 'This field is required!',
                maxLength: {
                  value: 90,
                  message: 'Maximum 90 characters allowed!',
                },
              })}
            />

            <Stack
              direction='row'
              justifyContent={errors?.customMessage ? 'space-between' : 'end'}
            >
              {errors?.customMessage && (
                <FormHelperText sx={{ color: 'red' }}>
                  {errors.customMessage.message}
                </FormHelperText>
              )}

              {watch('customMessage')?.length <= 90 && (
                <Box>
                  <FormHelperText sx={{ color: 'red' }}>
                    {90 - watch('customMessage').length} characters left
                  </FormHelperText>
                </Box>
              )}
            </Stack>
          </Layout>
        </Grid>
        <Grid xs={5} md={1}>
          <Layout text={'Reoccur?'}>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              {...register('reoccur', {
                required: 'This field is required!',
              })}
              value={watch('reoccur')}
              onChange={(_, value) => setValue('reoccur', value)}
            >
              <FormControlLabel value='1' control={<Radio />} label='Yes' />
              <FormControlLabel value='0' control={<Radio />} label='No' />
            </RadioGroup>

            {errors?.reoccur && (
              <FormHelperText sx={{ color: 'red' }}>
                {errors.reoccur.message}
              </FormHelperText>
            )}
          </Layout>
        </Grid>
        <Grid xs={7} md={2}>
          <Layout text={'Date and time'}>
            <div>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  {...register('date', {
                    required: 'This field is required!',
                  })}
                  value={watch('date')}
                  onChange={(newValue) => {
                    setValue('date', newValue);
                    if (errors?.date) {
                      clearErrors('date');
                    }
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {errors?.date && (
                <FormHelperText sx={{ color: 'red' }}>
                  {errors.date.message}
                </FormHelperText>
              )}
            </div>
          </Layout>
        </Grid>
        <Grid xs={12} sm={5} md={2}>
          <Layout text={'Days'}>
            <div>
              <Stack
                direction='row'
                spacing={2}
                sx={{ textTransform: 'capitalize' }}
              >
                <Stack direction='column'>
                  {['mon', 'tue', 'wed', 'thu'].map((value, i) => (
                    <FormControlLabel
                      value={value}
                      onChange={dayChangeHandler}
                      control={<Checkbox />}
                      label={value}
                    />
                  ))}
                </Stack>
                <Stack direction='column'>
                  {['fri', 'sat', 'sun'].map((value, i) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      value={value}
                      onChange={dayChangeHandler}
                      label={value}
                    />
                  ))}
                </Stack>
              </Stack>
            </div>
          </Layout>
        </Grid>
        <Grid xs={6} md={2}>
          <Layout text={'Duration'}>
            <Stack direction='row' spacing={0} alignItems='center'>
              <OutlinedInput
                placeholder=''
                size='small'
                type='number'
                // sx={{ width: '80px' }}
                {...register('duration', {
                  required: 'This field is required!',
                })}
              />
              <Typography variant='subtitle1' component={'p'}>
                s.
              </Typography>
            </Stack>
          </Layout>
        </Grid>
        <Grid xs={6} sm={3} md={1}>
          <Layout>
            <Button type='submit' variant='contained'>
              Add
            </Button>
          </Layout>
        </Grid>
      </Grid>
    </form>
  );
};

const Title = ({ text }) => {
  return (
    <Box
      component={'p'}
      sx={{
        background: '#afafaf',
        fontWeight: 'bold',
        color: 'black',
        pl: '6px',
        py: text ? '8px' : '18px',
        mb: 2,
        borderRadius: '3px',
      }}
    >
      {text}
    </Box>
  );
};

const Layout = ({ text, children }) => {
  return (
    <Box
      sx={{
        px: '10px',
        my: {
          xs: '10px',
          md: 0,
        },
      }}
    >
      <Title text={text} />
      {children}
    </Box>
  );
};

export default SchedulerMessageForm;
