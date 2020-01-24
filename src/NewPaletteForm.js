import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color';
import DraggableColorList from './DraggableColorList';
import useFormValidation from './hooks/useFormValidation';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 360;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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
    })
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
  drawerPaper: {
    width: drawerWidth
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
  input: {
    height: '1.5rem',
    outline: 'none'
  },
  error: {
    color: 'red',
    display: 'inline-block',
    textDecoration: 'none'
  },
  btn: {
    display: 'inline-block'
  }
}));

export function NewPaletteForm(props) {
  const classes = useStyles();

  const { savePalette, history, seedColors } = props;

  const [currentColor, setCurrentColor] = useState('teal');

  const {
    handleChange,
    values,
    handleColorSubmit,
    errors,
    setColors,
    colors,
    handlePaletteSubmit
  } = useFormValidation(currentColor, seedColors, history, savePalette);

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const removeColorBox = colorName => {
    const updatedColors = colors.filter(({ name }) => name !== colorName);
    setColors(updatedColors);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(prevColors => arrayMove(prevColors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ backgroundColor: '#cccccc' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <form onSubmit={handlePaletteSubmit}>
            <TextField
              type="text"
              name="paletteName"
              label={
                errors.isPaletteNameUnique ? (
                  <span className={classes.error}>
                    {errors.isPaletteNameUnique}
                  </span>
                ) : (
                  'Palette Name'
                )
              }
              onChange={handleChange}
              value={values.paletteName || ''}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </form>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <form onSubmit={handleColorSubmit}>
          <TextField
            id="standard-basic"
            type="text"
            name="colorName"
            value={values.colorName || ''}
            onChange={handleChange}
            style={
              errors.isColorNameUnique || errors.isColorUnique
                ? { border: '1px solid red' }
                : null
            }
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Add Color
          </Button>
          {errors.isColorUnique && (
            <span className={classes.error}>{errors.isColorUnique}</span>
          )}
          {errors.isColorNameUnique && (
            <span className={classes.error}>{errors.isColorNameUnique}</span>
          )}
        </form>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColorBox={removeColorBox}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
