const styles = {
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '70%',
      md: '35%',
      xl: '30%',
    },
    bgcolor: 'background.paper',
    p: 4,
    overflowX: 'auto',
    height: {
      xs: '60vh',
      md: '80vh',
      xl: 'auto',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'end',
    ':hover': {
      cursor: 'pointer',
    },
  },

  submitButton: {
    display: 'flex',
    justifyContent: 'start',
    my: '10px',
  },
};

export default styles;
