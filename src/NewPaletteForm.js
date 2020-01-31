import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color';
import clsx from 'clsx';
import DraggableColorList from './DraggableColorList';
import useForm from './hooks/useForm';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;

const useStyles = makeStyles((theme, currentColor) => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex'
    // position: 'relative'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between'
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
    // display: 'flex'
    // justifyContent: 'center',
    // flexDirection: 'flex-column'
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

export function NewPaletteForm(props) {
  const classes = useStyles();

  const [currentColor, setCurrentColor] = useState('teal');

  const [open, setOpen] = useState(false);

  const { savePalette, history, seedColors, maxColors } = props;

  const {
    handleChange,
    values,
    handleColorSubmit,
    handleEmojiSubmit,
    handlePaletteSubmit,
    errors,
    setColors,
    colors
  } = useForm(currentColor, seedColors, history, savePalette);

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const removeColorBox = col => {
    const updatedColors = colors.filter(({ color }) => color !== col);
    setColors(updatedColors);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(prevColors => arrayMove(prevColors, oldIndex, newIndex));
  };

  const randomColor = () => {
    let allPalettes = seedColors.flatMap(({ colors }) => {
      return colors;
    });
    let rand = Math.floor(Math.random() * allPalettes.length + 1);
    setColors([...colors, allPalettes[rand]]);
  };

  const paletteIsFull = colors.length === maxColors;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        setOpen={setOpen}
        handleEmojiSubmit={handleEmojiSubmit}
        handlePaletteSubmit={handlePaletteSubmit}
        handleDrawerOpen={handleDrawerOpen}
        errors={errors}
        drawerWidth={drawerWidth}
        handleChange={handleChange}
        values={values}
        history={history}
      />
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
        <div className={classes.drawerContent}>
          <h1>Design Your Palette</h1>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setColors([])}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={randomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
          <ChromePicker
            className={classes.colorPicker}
            color={currentColor}
            onChangeComplete={updateCurrentColor}
          />
          <form onSubmit={handleColorSubmit}>
            <input
              placeholder="Color Name"
              className={classes.input}
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
            <Button
              className={classes.addColorButton}
              style={{
                backgroundColor: paletteIsFull
                  ? 'rgba(0, 0, 0, 0.15)'
                  : currentColor
              }}
              type="submit"
              variant="contained"
              color="primary"
              disabled={paletteIsFull}
            >
              {paletteIsFull ? 'Full pallete' : 'Add Color'}
            </Button>
            {errors.isColorUnique && (
              <span className={classes.error}>{errors.isColorUnique}</span>
            )}
            {errors.isColorNameUnique && (
              <span className={classes.error}>{errors.isColorNameUnique}</span>
            )}
          </form>
        </div>
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
