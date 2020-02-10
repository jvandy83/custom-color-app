import React, { useState } from 'react';
import PaletteFormNav from './PaletteFormNav';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color';
import clsx from 'clsx';
import DraggableColorList from './DraggableColorList';
import useForm from './hooks/useInputValidator';
import arrayMove from 'array-move';
import { useStyles } from './styles/NewPaletteFormStyles';
import useRandomColorValidator from './hooks/useRandomColorValidator';

const drawerWidth = 400;

export default function NewPaletteForm({
  savePalette,
  history,
  seedColors,
  maxColors,
  starterPalette
}) {
  const classes = useStyles();

  const [currentColor, setCurrentColor] = useState('teal');

  const [open, setOpen] = useState(false);

  const {
    handleChange,
    values,
    handleColorSubmit,
    handleEmojiSubmit,
    handlePaletteSubmit,
    submittingPalette,
    submittingEmoji,
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

  const [showNavButtons, setShowNavButtons] = useState(true);

  const handleShowNavButtons = () => {
    handleDrawerClose();
    setShowNavButtons(true);
  };

  const removeColorBox = col => {
    const updatedColors = colors.filter(({ color }) => color !== col);
    setColors(updatedColors);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(prevColors => arrayMove(prevColors, oldIndex, newIndex));
  };

  const { validateRandomColor, colorErrors } = useRandomColorValidator(
    starterPalette,
    colors,
    setColors
  );

  const paletteIsFull = colors.length === maxColors;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        setOpen={setOpen}
        handleEmojiSubmit={handleEmojiSubmit}
        handlePaletteSubmit={handlePaletteSubmit}
        submittingPalette={submittingPalette}
        submittingEmoji={submittingEmoji}
        handleDrawerOpen={handleDrawerOpen}
        handleShowNavButtons={handleShowNavButtons}
        setShowNavButtons={setShowNavButtons}
        showNavButtons={showNavButtons}
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
          <IconButton onClick={handleShowNavButtons}>
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
            onClick={validateRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
          {colorErrors.isRandomColorUnique && (
            <div>
              <span style={{ color: 'red' }}>
                {colorErrors.isRandomColorUnique}
              </span>
            </div>
          )}
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
