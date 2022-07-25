import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCamerasLayoutAction } from '../../store/cameras/camerasAction';
const RightSideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Box
        component='div'
        sx={{
          width: {
            xs: 280,
            sm: 400,
          },
          boxSizing: 'border-box',
          padding: '10px',
          mb: 5,
        }}
      >
        <Typography variant='h4' gutterBottom component='div'>
          Display Layout
        </Typography>
        <Typography
          variant='h6'
          gutterBottom
          component='div'
          sx={{ mb: '12px' }}
        >
          Chose how you want cameras to show on display
        </Typography>
        <div>
          <CamDisplay rowCount={1} column={1} />
          <CamDisplay rowCount={3} column={3} />
          <CamDisplay rowCount={3} column={4} />
          <CamDisplay rowCount={4} column={4} />
        </div>
      </Box>
    </>
  );
};

const CamDisplay = ({ rowCount = 1, column = 1 }) => {
  const height = 200;
  const width = 230;
  const { rows, cols } = useSelector((state) => state.cameras.layout);
  const dispatch = useDispatch();

  const isEnable = useMemo(() => {
    return rows === rowCount && cols === column;
  }, [rowCount, column, rows, cols]);

  const clickHandler = () => {
    if (isEnable) return;
    dispatch(changeCamerasLayoutAction({ rows: rowCount, cols: column }));
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
        Cam Display Horizontal
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
            <Box
              component={'div'}
              sx={{
                height: `${height}px`,
                width: `${width - (width * 5) / 100}px`,
                background: 'blue',
                borderRadius: '4px',
              }}
            />
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
                      <Box
                        sx={{
                          borderRadius: '4px',
                          bgcolor: 'blue',
                          boxSizing: 'border-box',
                          padding: '4px',
                          width: '100%',
                          height: (height - 5 * rowCount) / rowCount,
                        }}
                      />
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

export default RightSideBar;
