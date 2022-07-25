import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
import CustomSelect from './CustomSelect';
const ConfigureForm = ({ open, setOpen }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
  } = useForm();

  const submitHandler = (values) => {};

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    p: 4,
    overflowX: 'auto',
    height: {
      xs: '60vh',
      md: '80vh',
      xl: 'auto',
    },
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component={Paper}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              ':hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => setOpen(false)}
            component='div'
          >
            <CloseIcon />
          </Box>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Grid container>
              <Grid xs={12} md={6}>
                <Stack spacing={1} component='div'>
                  <Typography>Priority:</Typography>
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
                </Stack>
                <Typography sx={{ mt: 2 }}>Default Sounds:</Typography>
                <Stack spacing={1} component='div'>
                  <Stack spacing={2} direction='row' alignItems={'center'}>
                    <Box sx={{ width: '100%' }}>
                      <CustomSelect
                        {...register('soundImportant')}
                        values={[]}
                        onChange={(e) => {
                          setValue('soundImportant', e.target.value);
                        }}
                        value={watch('soundImportant')}
                      />
                    </Box>
                    <div>
                      <PlayArrowIcon />
                    </div>
                    <Button sx={{ width: '130px' }}>Important</Button>
                  </Stack>
                  <Stack spacing={2} direction='row' alignItems={'center'}>
                    <Box sx={{ width: '100%' }}>
                      <CustomSelect
                        {...register('soundImportant')}
                        values={[]}
                        onChange={(e) => {
                          setValue('soundImportant', e.target.value);
                        }}
                        value={watch('soundImportant')}
                      />
                    </Box>
                    <div>
                      <PlayArrowIcon />
                    </div>
                    <Button sx={{ width: '130px' }}>Urgent</Button>
                  </Stack>
                  <Stack spacing={2} direction='row' alignItems={'center'}>
                    <Box sx={{ width: '100%' }}>
                      <CustomSelect
                        {...register('soundImportant')}
                        values={[]}
                        onChange={(e) => {
                          setValue('soundImportant', e.target.value);
                        }}
                        value={watch('soundImportant')}
                      />
                    </Box>
                    <div>
                      <PlayArrowIcon />
                    </div>
                    <Button sx={{ width: '130px' }}>Emergency</Button>
                  </Stack>
                  <Stack spacing={2} direction='row' alignItems={'center'}>
                    <Box sx={{ width: '100%' }}>
                      <CustomSelect
                        {...register('soundImportant')}
                        values={[]}
                        onChange={(e) => {
                          setValue('soundImportant', e.target.value);
                        }}
                        value={watch('soundImportant')}
                      />
                    </Box>
                    <div>
                      <PlayArrowIcon />
                    </div>
                    <Button sx={{ width: '130px' }}>General</Button>
                  </Stack>
                  <Stack spacing={2} direction='row' alignItems={'center'}>
                    <Box sx={{ width: '100%' }}>
                      <CustomSelect
                        {...register('soundImportant')}
                        values={[]}
                        onChange={(e) => {
                          setValue('soundImportant', e.target.value);
                        }}
                        value={watch('soundImportant')}
                      />
                    </Box>
                    <div>
                      <PlayArrowIcon />
                    </div>
                    <Button sx={{ width: '130px' }}>Scheduled</Button>
                  </Stack>

                  <div>
                    <Stack direction='row' spacing={0} alignItems='center'>
                      <Typography>Duration:</Typography>
                      <OutlinedInput
                        placeholder='sec'
                        size='small'
                        sx={{ width: '50px' }}
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
                      <Button variant='contained' sx={{ width: '130px' }}>
                        Important
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
                      <Button variant='contained' sx={{ width: '130px' }}>
                        Important
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: '10px',
              }}
            >
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
