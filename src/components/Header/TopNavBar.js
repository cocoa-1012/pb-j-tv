import { Stack } from '@mui/material';
import React from 'react';

import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'end',
  },
  link: {
    textDecoration: 'none',
    margin: '0 10px',
  },
});
const TopNavBar = ({ isNavShow }) => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Stack spacing={0} direction='row' divider={<Divider />}>
        {isNavShow ? (
          <>
            <Link to='/' className={classes.link}>
              Return to Master
            </Link>
            <Link to='/' className={classes.link}>
              Lobby Display
            </Link>
            <Link to='/' className={classes.link}>
              Back Display
            </Link>
          </>
        ) : (
          <>
            <Link to='/' className={classes.link}>
              Logout
            </Link>
          </>
        )}
      </Stack>
    </nav>
  );
};
const Divider = () => {
  return '|';
};

export default TopNavBar;
