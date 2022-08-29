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
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addMessageAction } from '../../store/messages/messageAction';
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
    reset,
  } = useForm({
    defaultValues: {
      category: '',
      automatedMessage: '',
    },
  });

  const dispatch = useDispatch();

  const submitHandler = (values) => {
    const data = {
      userId: parseInt(localStorage.getItem('accountSelected')),
      message: values.customMessage,
      dateTime: moment(),
      lastSent: moment(),
      duration: 90,
    };

    dispatch(
      addMessageAction(data, (isOk, result) => {
        if (isOk) {
          console.log('ok');
          reset();
        } else {
          console.log('is not ok.');
          console.log(result);
        }
      })
    );
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
                        {...register('important')}
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
                        {...register('urgent')}
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
                      {...register('emergency')}
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
                    {...register('category')}
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
                    {...register('automatedMessage')}
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
