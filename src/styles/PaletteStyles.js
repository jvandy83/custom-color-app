import sizes from './sizes';

export default {
  Palette: {
    // height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3px',
    cursor: 'pointer',
    margin: '0 auto',
    width: '20%',
    opacity: 1,
    background: 'black',
    height: '50%',
    [sizes.down('sm')]: {
      width: '50%',
      height: '20%',
      marginBottom: '-3.8px'
    },
    [sizes.down('xs')]: {
      position: 'relative',
      height: '10%',
      width: '100%'
      // display: 'block'
    },
    '& a': {
      width: '6rem',
      height: '1.8rem',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-3rem',
      marginTop: '-0.9rem',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '1.8rem',
      color: 'white',
      textEmphasis: 'none',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }
};
