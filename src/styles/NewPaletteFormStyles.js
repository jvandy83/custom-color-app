import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
const drawerWidth = 400;

export const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '80%'
  },
  colorPicker: {
    width: '100%',
    margin: '2rem auto'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  error: {
    color: 'red',
    textDecoration: 'none'
  },
  input: {
    paddingBottom: '.5rem',
    outline: 'none',
    lineHeight: '1.4rem',
    fontSize: '1.3rem',
    boxShadow: 'inset 1px 2px 5px rgba(0, 0, 0, 0.5)',
    // background: '#fff',
    color: '#525865',
    borderRadius: '.1rem',
    width: '100%'
    // border: '1px solid #d1d1d1'
  },
  addColorButton: {
    display: 'block',
    width: '100%'
  }
}));
