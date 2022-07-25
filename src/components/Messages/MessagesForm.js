import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import SelectCategory from './SelectCategory';
import SelectMessage from './SelectMessage';

const MessagesForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm();

  const submitHandler = (values) => {
    // all values
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Grid container>
        <Grid xs={12} md={9}>
          <Grid container>
            <Grid xs={12} md={6}>
              <Typography>Priority:</Typography>
              <Stack spacing={1} component='div'>
                <div>
                  <Stack spacing={2} direction='row'>
                    <FormControl fullWidth>
                      <OutlinedInput
                        id='component-outlined'
                        {...register('important', {
                          required: 'This field is required!',
                        })}
                        size='small'
                      />
                    </FormControl>
                    <Button variant='contained' sx={{ width: '130px' }}>
                      Important
                    </Button>
                  </Stack>
                  {errors?.important && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.important.message}
                    </FormHelperText>
                  )}
                </div>
                <div>
                  <Stack spacing={2} direction='row'>
                    <FormControl fullWidth>
                      <OutlinedInput
                        id='component-outlined'
                        {...register('urgent', {
                          required: 'This field is required!',
                        })}
                        size='small'
                      />
                    </FormControl>
                    <Button
                      variant='contained'
                      color='secondary'
                      sx={{ width: '130px' }}
                    >
                      Urgent
                    </Button>
                  </Stack>
                  {errors?.urgent && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.urgent.message}
                    </FormHelperText>
                  )}
                </div>
                <div>
                  <Stack spacing={2} direction='row'>
                    <OutlinedInput
                      id='component-outlined'
                      {...register('emergency', {
                        required: 'This field is required!',
                      })}
                      size='small'
                      fullWidth
                    />

                    <Button
                      variant='contained'
                      color='info'
                      sx={{ width: '130px' }}
                    >
                      Emergency
                    </Button>
                  </Stack>
                  {errors?.emergency && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.emergency.message}
                    </FormHelperText>
                  )}
                </div>
                <div>
                  <SelectCategory
                    {...register('category', {
                      required: 'This field is required!',
                    })}
                    onChange={(e) => {
                      setValue('category', e.target.value);
                      if (errors?.category) {
                        clearErrors('category');
                      }
                    }}
                    value={watch('category')}
                  />
                  {errors?.category && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.category.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={6} sx={{ pl: { xs: 0, md: 2 } }}>
              <Stack spacing={2}>
                <div>
                  <Typography>Automated Messages:</Typography>
                  <SelectMessage
                    {...register('automatedMessage', {
                      required: 'This field is required!',
                    })}
                    onChange={(e) => {
                      setValue('automatedMessage', e.target.value);
                      if (errors?.automatedMessage) {
                        clearErrors('automatedMessage');
                      }
                    }}
                    value={watch('automatedMessage')}
                  />
                  {errors?.automatedMessage && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.automatedMessage.message}
                    </FormHelperText>
                  )}
                </div>
                <div>
                  <Typography>Custom Messages:</Typography>

                  <OutlinedInput
                    placeholder='Automated Messages:'
                    multiline
                    rows={5}
                    size='small'
                    fullWidth
                    {...register('customMessage', {
                      required: 'This field is required!',
                      maxLength: {
                        value: 80,
                        message: 'Maximum 80 is allowed!',
                      },
                    })}
                  />

                  <Stack
                    direction='row'
                    justifyContent={
                      errors?.customMessage ? 'space-between' : 'end'
                    }
                  >
                    {errors?.customMessage && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.customMessage.message}
                      </FormHelperText>
                    )}

                    {watch('customMessage')?.length <= 80 && (
                      <Box>
                        <FormHelperText sx={{ color: 'red' }}>
                          {80 - watch('customMessage').length} characters left
                        </FormHelperText>
                      </Box>
                    )}
                  </Stack>
                </div>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: '10px' }}>
            <Button variant='contained' type='submit'>
              General Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessagesForm;
