import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSlidePhotosAction } from '../../store/slidePhoto/slidePhotoAction';

function Slider({ imageHeight }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllSlidePhotosAction());
  }, [dispatch]);

  const photos = useSelector((state) => state.slidePhotos);

  return (
    <Carousel
      indicators={false}
      swipe={true}
      navButtonsAlwaysInvisible={false}
      navButtonsAlwaysVisible={true}
      animation='slide'
      duration={1500}
      autoPlay={false}
    >
      {photos.map((item, i) => (
        <Item key={i} item={item} imageHeight={imageHeight} />
      ))}
    </Carousel>
  );
}

function Item({ imageHeight, item }) {
  return (
    <>
      <Box
        as='div'
        sx={{
          width: '100%',
          height: imageHeight - 20,
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <Box
          as='img'
          src={`${baseUrl}${item.file_name}`}
          sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
    </>
  );
}

const baseUrl =
  'https://dev.preschoolreports.com/admin/timthumb.php?src=admin/photo_slides/';

export default Slider;
