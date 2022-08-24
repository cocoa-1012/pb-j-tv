import { Box, Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInnerSize } from '../../hooks/useInnerSize';
import { fetchAllCamerasAction } from '../../store/cameras/camerasAction';
import SingleCamera from './SingleCamera';

const image =
  'https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

const LobbyDisplayContent = () => {
  const { height: windowHeight } = useInnerSize();
  const dispatch = useDispatch();
  const {
    data: cameras,
    layout,
    slide,
  } = useSelector((state) => state.cameras);

  useEffect(() => {
    dispatch(fetchAllCamerasAction());
  }, [dispatch]);

  const imageHeight = 300;
  const row = layout?.row;
  const column = layout?.column;

  const total = row === 1 ? 1 : row * column;
  const height = useMemo(() => {
    if (!slide) return windowHeight / row;

    return (windowHeight - imageHeight) / row;
  }, [slide, windowHeight, imageHeight, row]);

  return (
    <>
      <div>
        <Grid container>
          {cameras.slice(0, total).map((camera, i) => (
            <Grid xs={12} sm={12 / column} sx={{}} key={camera.id}>
              <SingleCamera
                cameraName={camera.cameraName}
                height={height - 2}
              />
            </Grid>
          ))}
        </Grid>
        <>
          {slide && (
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
                src={image}
                sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
          )}
        </>
      </div>
    </>
  );
};

export default LobbyDisplayContent;
