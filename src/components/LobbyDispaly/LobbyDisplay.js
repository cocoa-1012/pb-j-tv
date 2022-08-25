import { Box, Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bgPattern from '../../assets/images/bg_pattern.png';
import { useInnerSize } from '../../hooks/useInnerSize';
import { fetchAllCamerasAction } from '../../store/cameras/camerasAction';
import SingleCamera from './SingleCamera';
import Slider from './Sliders';

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
      <Box
        as='div'
        sx={{ background: `url(${bgPattern})`, height: windowHeight }}
      >
        <Grid container>
          {cameras.slice(0, total).map((camera, i) => (
            <Grid xs={12} sm={12 / column} sx={{}} key={camera.id}>
              <SingleCamera ipAddress={camera.ipAddress} height={height - 2} />
            </Grid>
          ))}
        </Grid>
        <>{slide && <Slider imageHeight={imageHeight} />}</>
      </Box>
    </>
  );
};

export default LobbyDisplayContent;
