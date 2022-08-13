import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCamerasLayoutAction } from '../../store/cameras/camerasAction';

const CamDisplayLayoutItem = ({ rowCount = 1, column = 1, orientation = "",displayId=1 }) => {
  const height = 200;
  const width = 230;
  const { displayGridSelected } = useSelector((state) => state.cameras.layout);
  const dispatch = useDispatch();

  const isEnable = useMemo(() => {
    return displayGridSelected == displayId;
  }, [displayGridSelected, displayId]);

  const clickHandler = () => {
    if (isEnable) return;
    dispatch(changeCamerasLayoutAction({ displayId: displayId }));
  };

  return (
    <Box component='div' sx={{ my: 3 }}>
      <Typography
        variant='body1'
        gutterBottom
        component='div'
        sx={{
          mb: '5px',
        }}
      >
        {rowCount === 1 ? '1' : `${rowCount}×${column} ${rowCount * column}`}{' '}
        Cam Display {orientation}
      </Typography>
      <Stack
        spacing={2}
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        alignItems='start'
      >
        <Box>
          {rowCount === 1 ? (
            <Box component={'div'} sx={styles.singleBox({ height, width })} />
          ) : (
            <Box
              component={'div'}
              sx={{
                width,
                height,
              }}
            >
              <Grid container gap={'5px'}>
                {new Array(rowCount * column).fill().map((_, i) => {
                  return (
                    <Grid xs={11 / column}>
                      <Box sx={styles.box({ height, rowCount })} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
        </Box>
        <div>
          <Button
            variant='contained'
            color={!isEnable ? 'primary' : 'secondary'}
            onClick={clickHandler}
          >
            {!isEnable ? 'Enable' : 'Disable'}
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default CamDisplayLayoutItem;

const styles = {
  singleBox: ({ width, height }) => ({
    height: `${height}px`,
    width: `${width - (width * 5) / 100}px`,
    background: 'blue',
    borderRadius: '4px',
  }),
  box: (props) => {
    const { height, rowCount } = props;
    return {
      borderRadius: '4px',
      bgcolor: 'blue',
      boxSizing: 'border-box',
      padding: '4px',
      width: '100%',
      height: (height - 5 * rowCount) / rowCount,
    };
  },
};
