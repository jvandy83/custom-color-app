import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    margin: '0',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    width: '20%',
    '&:hover button': {
      opacity: '1'
    },
    // [sizes.down('lg')]: {
    //   width: '20%',
    //   height: props => (props.showingFullPalette ? '25%' : '50%')
    // },
    [sizes.down('sm')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '20%'),
      marginBottom: '-3.8px'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.65
        ? 'rgba(0,0,0,0.5)'
        : '#eeeeee'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.7
        ? '#eeeeee'
        : 'rgba(0,0,0,0.5)'
  },
  seeMore: {
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '4rem',
    height: '2rem',
    textAlign: 'center',
    lineHeight: '2rem',
    textTransform: 'uppercase',
    color: props =>
      chroma(props.background).luminance() >= 0.55
        ? 'rgba(0,0,0,0.5)'
        : '#eeeeee'
  },
  copyButton: {
    background: 'rgba(255, 255, 255, 0.3)',
    textTransform: 'uppercase',
    display: 'inline-block',
    textDecoration: 'none',
    marginTop: '-0.9rem',
    position: 'absolute',
    marginLeft: '-3rem',
    lineHeight: '1.8rem',
    textEmphasis: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '1rem',
    height: '1.8rem',
    outline: 'none',
    border: 'none',
    width: '6rem',
    left: '50%',
    top: '50%',
    opacity: '0',
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  boxContent: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'absolute',
    fontSize: '0.8rem',
    padding: '0.6rem',
    color: 'black',
    width: '100%',
    bottom: '0',
    left: '0'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6 ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '200'
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};
