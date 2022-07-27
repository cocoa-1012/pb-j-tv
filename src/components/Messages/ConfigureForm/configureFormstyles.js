const styles = {
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '70%',
      md: '55%',
      xl: '50%',
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
  addButton: {
    textTransform: 'none',
    width: {
      xs: '100px',
    },
    fontSize: {
      xs: 12,
      sm: 16,
    },
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    my: '10px',
  },
};

export default styles;
