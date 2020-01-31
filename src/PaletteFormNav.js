import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormDialog from './FormDialog';
import clsx from 'clsx';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black'
    // color: '#eeeee'
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
  btn: {
    display: 'inline-block'
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
  }
}));

const PaletteFormNav = ({
  open,
  handleEmojiSubmit,
  handlePaletteSubmit,
  handleDrawerOpen,
  errors,
  handleChange,
  values
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.nav}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <FormDialog
            handleEmojiSubmit={handleEmojiSubmit}
            handleDrawerOpen={handleDrawerOpen}
            handlePaletteSubmit={handlePaletteSubmit}
            errors={errors}
            drawerWidth={drawerWidth}
            handleChange={handleChange}
            values={values}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
