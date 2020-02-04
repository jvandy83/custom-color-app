import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 400;

export const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  paletteInput: {
    // display: 'flex'
    display: 'inline-block',
    margin: '0 6rem'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    '& div': {
      justifyContent: 'flex-end'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  error: {
    color: 'red',
    display: 'inline-block',
    textDecoration: 'none'
  },
  input: {
    paddingBottom: '.5rem',
    outline: 'none',
    lineHeight: '1.4rem',
    fontSize: '1.3rem',
    boxShadow: 'inset 1px 2px 5px rgba(0, 0, 0, 0.5)',
    background: '#fff',
    color: '#525865',
    borderRadius: '.1rem'
    // border: '1px solid #d1d1d1'
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  addPalette: {
    color: 'black',
    backgroundColor: 'silver',
    '&:hover': {
      backgroundColor: 'lightgrey'
    },
    marginLeft: '2rem'
  }
}));
