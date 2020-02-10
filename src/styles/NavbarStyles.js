import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    [sizes.down('med')]: {
      justifyContent: 'space-between'
    }
  },
  levelTitle: {
    marginLeft: '2rem',
    [sizes.down('med')]: {
      display: 'none'
    }
  },
  menuButton: {
    display: 'none',
    border: '3px solid black',
    textDecoration: 'none',
    outline: 'none',
    [sizes.down('sm')]: {
      display: 'block',
      backgroundColor: 'black',
      color: 'white',
      // marginRight: '1rem',
      fontSize: '1.2rem',
      width: '8rem',
      padding: '0.5rem'
    }
  },
  logo: {
    padding: '0 0.8rem',
    fontSize: '1.5rem',
    backgroundColor: '#edeff1',
    fontFamily: 'Roboto sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    // [sizes.down('sm')]: {
    //   width: '100%'
    // },
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    padding: '0 0.5rem',
    textDecoration: 'none',
    outline: 'none',
    marginRight: '1rem',
    background: '#edeff1',
    [sizes.down('sm')]: {
      display: 'none'
    }
  },

  mobileMenuContainer: {
    fontWeight: '400',
    letterSpacing: '2px',
    fontStretch: '200%',
    margin: 'auto',
    boxShadow: '5px 5px 12px rgb(0, 0, 0, 0.4)',
    borderRadius: '5px',
    height: '30vh',
    width: '40vh',
    padding: '2rem',
    textDecoration: 'none',
    background: '#edeff1',
    position: 'absolute',
    top: 'calc(50% - 59px)',
    left: 'calc(50% - 129px)',
    zIndex: 30
    // position: 'relative',
  },
  slider: {
    width: '30vw',
    margin: '0 2rem',
    display: 'inline-block',
    [sizes.down('sm')]: {
      display: 'none'
    },

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
  },
  mobileSlider: {
    marginTop: '3rem',
    width: '80%',
    margin: 'auto',
    // marginLeft: '4rem',
    display: 'none',
    // [sizes.down('sm')]: {
    //   display: 'none'
    // },

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
