import { Button, Grid, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSlidePhotoAction,
  updateSlidePhotoStatusAction,
} from '../../store/slidePhoto/slidePhotoAction';

const Content = () => {
  const photos = useSelector((state) => state.slidePhotos);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);

  const totalPage = useMemo(() => {
    if (photos.length === 0) return 1;
    return Math.ceil(photos.length / itemPerPage);
  }, [photos, itemPerPage]);

  const filteredPhotos = useMemo(() => {
    if (photos.length === 0) return [];
    const start = itemPerPage * currentPage - itemPerPage;
    const end = itemPerPage * currentPage;
    return photos.slice(start, end);
  }, [photos, itemPerPage, currentPage]);

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
          {filteredPhotos.map((photo) => (
            <Grid xs={12} sm={6} md={4}>
              <Box sx={styles.item}>
                <div>
                  <Box sx={styles.imageWrapper}>
                    <Box
                      component={'img'}
                      src={
                        'https://dev.preschoolreports.com/admin/timthumb.php?src=admin/photo_slides/' +
                        photo.file_name
                      }
                      sx={styles.image}
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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={totalPage}
            shape='rounded'
            size='medium'
            page={currentPage}
            onChange={(_, value) => setCurrentPage(value)}
          />
        </Box>
      </div>
    </div>
  );
};

export default Content;

const styles = {
  item: {
    px: { xs: 0, sm: '10px' },
    py: { xs: '5px' },
    boxSizing: 'border-box',
  },
  imageWrapper: {
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
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};
