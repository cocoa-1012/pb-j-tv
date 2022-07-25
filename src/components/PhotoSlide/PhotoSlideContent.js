import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllSlidePhotosAction } from '../../store/slidePhoto/slidePhotoAction';
import Content from './Content';
import ImageUploadForm from './ImageUploadForm';
import Top from './Top';

const PhotoSlideContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllSlidePhotosAction());
  }, [dispatch]);
  return (
    <Box sx={{ my: '20px' }}>
      <Top />
      <ImageUploadForm />
      <Content />
    </Box>
  );
};

export default PhotoSlideContent;
