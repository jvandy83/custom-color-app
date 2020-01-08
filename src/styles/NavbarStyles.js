export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: '1rem',
    padding: '0 0.8rem',
    fontSize: '1.5rem',
    backgroundColor: '#edeff1',
    fontFamily: 'Roboto sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
    background: '#edeff1'
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& rc-slider-rail': {
      height: '0.5rem'
    },
    '& rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: 'rgb(0, 0, 0, 0.6)',
      outline: 'none',
      border: '.3px solid rgb(0, 0, 0, 0.7)',
      boxShadow: 'none',
      width: '0.85rem',
      marginTop: '-4px',
      cursor: 'pointer'
    }
  }
};
