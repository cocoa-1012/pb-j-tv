import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  FormHelperText,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateCamerasAction } from '../../../store/cameras/camerasAction';

import styles from './formStyles';
import Toggle from './Toggle';
const EditCamera = ({ open, setOpen, id }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      status: 0,
      blankStatus: 0,
      cameraName: '',
      ipAddress: '',
      backDisplay: 0,
    },
  });

  const cameraData = useSelector((state) => {
    return state.cameras.data.find((c) => c.id === id);
  });

  useEffect(() => {
    if (cameraData) {
      Object.entries(cameraData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
    return reset;
  }, [cameraData, setValue, reset]);

  const dispatch = useDispatch();
  const submitHandler = (values) => {
    console.log(values);

    dispatch(
      updateCamerasAction(values, (isOk, result) => {
        if (isOk) {
          console.log('ok');
          setOpen(false);
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
            <Box as='div' sx={{ width: '100%' }}>
              <div>
                <Typography>Web Cams:</Typography>
                <OutlinedInput
                  id='component-outlined'
                  {...register('cameraName', {
                    required: 'This field is required!',
                  })}
                  fullWidth
                  size='small'
                />
                <div>
                  {errors?.cameraName && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.cameraName.message}
                    </FormHelperText>
                  )}
                </div>
              </div>

              <div>
                <Typography>IP Address:</Typography>
                <OutlinedInput
                  id='component-outlined'
                  {...register('ipAddress', {
                    required: 'This field is required!',
                  })}
                  fullWidth
                  size='small'
                />
                <div>
                  {errors?.ipAddress && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.ipAddress.message}
                    </FormHelperText>
                  )}
                </div>
              </div>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Status</Typography>
                <Toggle
                  {...register('status')}
                  onChange={(e) => {
                    setValue('status', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('status')}
                />
                <div>
                  {errors?.status && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.status.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Blink</Typography>
                <Toggle
                  {...register('backDisplay')}
                  onChange={(e) => {
                    setValue('backDisplay', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('backDisplay')}
                />
                <div>
                  {errors?.backDisplay && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.backDisplay.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Blink</Typography>
                <Toggle
                  {...register('blankStatus')}
                  onChange={(e) => {
                    setValue('blankStatus', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('blankStatus')}
                />
                <div>
                  {errors?.blankStatus && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.blankStatus.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
            </Box>

            {/* submit button */}
            <Box sx={styles.submitButton}>
              <Button variant='contained' type='submit'>
                Update Camera
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditCamera;
