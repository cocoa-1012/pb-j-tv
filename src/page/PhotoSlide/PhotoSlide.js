import { Container } from '@mui/system';
import React from 'react';
import Header from '../../components/Header/Header';
import PhotoSlideContent from '../../components/PhotoSlide/PhotoSlideContent';

const PhotoSlide = () => {
  return (
    <div>
      <Header />
      <Container>
        <PhotoSlideContent />
      </Container>
    </div>
  );
};

export default PhotoSlide;
