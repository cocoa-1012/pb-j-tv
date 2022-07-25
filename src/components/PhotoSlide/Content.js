import { Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSlidePhotoAction,
  updateSlidePhotoStatusAction,
} from '../../store/slidePhoto/slidePhotoAction';

const Content = () => {
  const photos = useSelector((state) => state.slidePhotos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeSlidePhotoAction(id));
  };
  const statusChangeHandler = (id, value) => {
    dispatch(updateSlidePhotoStatusAction({ id, value }));
  };
  return (
    <div>
      <div>
        <Grid
          container
          sx={{ my: 3 }}
          columnGap={{ xs: '10px', sm: '0' }}
          flexWrap={'wrap'}
        >
          {photos.map((photo) => (
            <Grid xs={12} sm={6} md={4}>
              <Box
                sx={{
                  px: { xs: 0, sm: '10px' },
                  py: { xs: '5px' },
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <Box
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
                  >
                    <Box
                      component={'img'}
                      src={photo.image}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </div>
                <Stack
                  direction='row'
                  justifyContent={'center'}
                  sx={{ py: '20px' }}
                  spacing={2}
                >
                  <Button
                    variant='contained'
                    color='error'
                    size='small'
                    onClick={() => deleteHandler(photo.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant='contained'
                    color={photo.isActive ? 'primary' : 'secondary'}
                    size='small'
                    onClick={() =>
                      statusChangeHandler(photo.id, !photo.isActive)
                    }
                  >
                    {photo.isActive ? 'Active' : 'Deactive'}
                  </Button>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Content;
