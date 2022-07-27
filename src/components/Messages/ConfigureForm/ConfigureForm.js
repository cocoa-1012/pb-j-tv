import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addMessageAction } from '../../../store/messages/messageAction';
import styles from './configureFormstyles';
import CustomSelect from './CustomSelect';
import PriorityItem from './PriorityItem';
import SoundItem from './SoundItem';
const ConfigureForm = ({ open, setOpen }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
  } = useForm();
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

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styles.main} component={Paper}>
          <Box
            sx={styles.content}
            onClick={() => setOpen(false)}
            component='div'
          >
            <CloseIcon />
          </Box>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Grid container>
              <Grid xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                <Stack spacing={1} component='div'>
                  <Typography>Priority:</Typography>
                  <div></div>
                  <div>
                    <PriorityItem buttonText={'Important'}>
                      <OutlinedInput
                        id='component-outlined'
                        {...register('important', {
                          required: 'This field is required!',
                        })}
                        size='small'
                      />
                    </PriorityItem>
                    {errors?.important && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.important.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <PriorityItem buttonText={'Urgent'} color={'secondary'}>
                      <OutlinedInput
                        id='component-outlined'
                        {...register('urgent', {
                          required: 'This field is required!',
                        })}
                        size='small'
                      />
                    </PriorityItem>
                    {errors?.urgent && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.urgent.message}
                      </FormHelperText>
                    )}
                  </div>

                  <div>
                    <PriorityItem buttonText={'Emergency'} color={'success'}>
                      <OutlinedInput
                        id='component-outlined'
                        {...register('emergency', {
                          required: 'This field is required!',
                        })}
                        size='small'
                      />
                    </PriorityItem>

                    {errors?.emergency && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.emergency.message}
                      </FormHelperText>
                    )}
                  </div>
                </Stack>
                <Typography sx={{ mt: 2 }}>Default Sounds:</Typography>
                <Stack spacing={1} component='div'>
                  <SoundItem buttonText={'Important'}>
                    <CustomSelect
                      {...register('soundImportant')}
                      values={[]}
                      onChange={(e) => {
                        setValue('soundImportant', e.target.value);
                      }}
                      value={watch('soundImportant')}
                    />
                  </SoundItem>

                  <SoundItem buttonText={'Urgent'}>
                    <CustomSelect
                      {...register('soundImportant')}
                      values={[]}
                      onChange={(e) => {
                        setValue('soundImportant', e.target.value);
                      }}
                      value={watch('soundImportant')}
                    />
                  </SoundItem>

                  <SoundItem buttonText={'Emergency'}>
                    <CustomSelect
                      {...register('soundImportant')}
                      values={[]}
                      onChange={(e) => {
                        setValue('soundImportant', e.target.value);
                      }}
                      value={watch('soundImportant')}
                    />
                  </SoundItem>
                  <SoundItem buttonText={'General'}>
                    <CustomSelect
                      {...register('soundImportant')}
                      values={[]}
                      onChange={(e) => {
                        setValue('soundImportant', e.target.value);
                      }}
                      value={watch('soundImportant')}
                    />
                  </SoundItem>
                  <SoundItem buttonText={'Scheduled'}>
                    <CustomSelect
                      {...register('soundImportant')}
                      values={[]}
                      onChange={(e) => {
                        setValue('soundImportant', e.target.value);
                      }}
                      value={watch('soundImportant')}
                    />
                  </SoundItem>

                  <div>
                    <Stack direction='row' spacing={0} alignItems='center'>
                      <Typography>Duration:</Typography>
                      <OutlinedInput
                        placeholder='sec'
                        size='small'
                        sx={{ width: '80px' }}
                      />
                      <Typography variant='subtitle1' component={'p'}>
                        s.
                      </Typography>
                    </Stack>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12} md={6} sx={{ pl: { xs: 0, md: 2 } }}>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <div>
                    <Typography>Emergency Categories:</Typography>
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
                      <Button variant='contained' sx={styles.addButton}>
                        +Add
                      </Button>
                    </Stack>
                    {errors?.message && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.message.message}
                      </FormHelperText>
                    )}
                  </div>
                  <Box sx={{ pl: 2 }}>
                    <OutlinedInput
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
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  <div>
                    <Typography>Quick Messages:</Typography>
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
                      <Button variant='contained' sx={styles.addButton}>
                        +Add
                      </Button>
                    </Stack>
                    {errors?.message && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.message.message}
                      </FormHelperText>
                    )}
                  </div>
                  <Box sx={{ pl: 2 }}>
                    <OutlinedInput
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
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            {/* submit button */}
            <Box sx={styles.submitButton}>
              <Button variant='contained' type='submit'>
                Save Defaults
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfigureForm;
