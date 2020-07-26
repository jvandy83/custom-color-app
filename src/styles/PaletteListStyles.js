import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
import bg from './newBg.svg';

const useStyles = makeStyles({
  root: {
    paddingBottom: '6rem',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#5d7ab9',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundImage: `url(${bg})`
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [sizes.down('lg')]: {
      width: '55%'
    },
    [sizes.down('med')]: {
      width: '60%'
    },
    [sizes.down('sm')]: {
      width: '65%'
    },
    [sizes.down('xs')]: {
      alignItems: 'center',
      width: '45%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white'
    },
    [sizes.down('xs')]: {}
  },
  logo: {
    [sizes.down('xs')]: {
      width: '60px'
    }
  },
  createPaletteLink: {
    [sizes.down('xs')]: {
      width: '50px'
    }
  },
  palettes: {
    postition: 'fixed',
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
});

export default useStyles;
