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
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SchedulerMessageForm = () => {
  const [date, setDate] = useState(null);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
  } = useForm();
  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <Layout text={'Message'}>
            <OutlinedInput
              placeholder='Automated Messages:'
              multiline
              rows={5}
              size='small'
              fullWidth
              {...register('customMessage', {
                required: 'This field is required!',
              })}
            />

            {errors?.customMessage && (
              <FormHelperText sx={{ color: 'red' }}>
                {errors.customMessage.message}
              </FormHelperText>
            )}
          </Layout>
        </Grid>
        <Grid xs={1}>
          <Layout text={'Reoccur?'}>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
            >
              <FormControlLabel value='1' control={<Radio />} label='Yes' />
              <FormControlLabel value='0' control={<Radio />} label='No' />
            </RadioGroup>
          </Layout>
        </Grid>
        <Grid xs={3}>
          <Layout text={'Date and time'}>
            <div>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </Layout>
        </Grid>
        <Grid xs={2}>
          <Layout text={'Days'}>
            <div>
              <Stack
                direction='row'
                spacing={2}
                sx={{ textTransform: 'capitalize' }}
              >
                <Stack direction='column'>
                  {['mon', 'tue', 'wed', 'thu'].map((value, i) => (
                    <FormControlLabel control={<Checkbox />} label={value} />
                  ))}
                </Stack>
                <Stack direction='column'>
                  {['fri', 'sat', 'sun'].map((value, i) => (
                    <FormControlLabel control={<Checkbox />} label={value} />
                  ))}
                </Stack>
              </Stack>
            </div>
          </Layout>
        </Grid>
        <Grid xs={1}>
          <Layout text={'Duration'}>
            <Stack direction='row' spacing={0} alignItems='center'>
              <OutlinedInput
                placeholder=''
                size='small'
                sx={{ width: '50px' }}
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
        <Grid xs={1}>
          <Layout>
            <Button variant='contained'>Add</Button>
          </Layout>
        </Grid>
      </Grid>
    </div>
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
    <Box sx={{ px: '10px' }}>
      <Title text={text} />
      {children}
    </Box>
  );
};

export default SchedulerMessageForm;
