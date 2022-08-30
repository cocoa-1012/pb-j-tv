import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSlidePhotoAction } from '../../store/slidePhoto/slidePhotoAction';

const ImageUploadForm = () => {
  const theme = useTheme();

  const [sliderTime, setSliderTime] = useState(3);
  const [image, setImage] = useState(3);
  const [hasImage, setHasImage] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!hasImage) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);

    const data = {
      image,
      sliderTime,
    };

    dispatch(
      addSlidePhotoAction(data, (result) => {
        if (result) {
          setImage('');
          setHasImage(false);
          setShowErrors(false);
        } else {
          setShowErrors(true);
        }
      })
    );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
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
                  value={sliderTime}
                  onChange={(e) => setSliderTime(e.target.value)}
                >
                  {times.map((t) => (
                    <MenuItem
                      key={Math.random()}
                      value={t}
                      style={getStyles(t, sliderTime, theme)}
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
                setImage(e.target.files[0]);
                setHasImage(true);
                setShowErrors(true);
              }}
            />
            {showErrors && !hasImage && (
              <FormHelperText sx={{ color: 'red' }}>
                This field is required!
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

export default ImageUploadForm;
