import React, { useState } from 'react';
import PaletteFormNav from './PaletteFormNav';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import DraggableColorList from './DraggableColorList';
import useForm from './hooks/useInputValidator';
import arrayMove from 'array-move';
import { ChromePicker } from 'react-color';
import { useStyles } from './styles/NewPaletteFormStyles';
import { useRandomColorValidator } from './hooks/useRandomColorValidator';
import { useWindowSize } from './hooks/useWindowSize';

const drawerWidth = 400;

export default function NewPaletteForm({
  savePalette,
  history,
  seedColors,
  maxColors,
  starterPalette
}) {
  const classes = useStyles();
  const size = useWindowSize();

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

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const [hideNavButtons, setHideNavButtons] = useState(false);

  const handleDrawerOpen = () => {
    if (size.width < 800) {
      setHideNavButtons(true);
      setOpen(true);
    } else {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setHideNavButtons(false);
    setOpen(false);
  };

  const removeColorBox = React.useCallback(
    (col) => {
      const updatedColors = colors.filter(({ color }) => color !== col);
      setColors(updatedColors);
    },
    [colors, setColors]
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((prevColors) => arrayMove(prevColors, oldIndex, newIndex));
  };

  const { randomColor, colorErrors } = useRandomColorValidator(
    starterPalette,
    colors
  );

  const [randomColorErrors, setRandomColorErrors] = useState({});

  const randomColorErrorLength = Object.keys(randomColorErrors).length;

  const generateRandomColor = () => {
    setRandomColorErrors(colorErrors);
    if (randomColorErrorLength === 0) {
      setColors([...colors, randomColor]);
    } else {
      return resetErrors;
    }
  };

  const reset = () => {
    setRandomColorErrors({});
  };

  const paletteIsFull = colors.length === maxColors;
  const resetErrors = randomColorErrorLength > 0;

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
        hideNavButtons={hideNavButtons}
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
          {colorErrors.isRandomColorUnique ? (
            <div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'grey',
                  color: '#eeeeee',
                  width: '100%'
                }}
                onClick={reset}
              >
                Reset
              </Button>
              <p style={{ color: 'red' }}>{colorErrors.isRandomColorUnique}</p>
            </div>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={generateRandomColor}
              disabled={resetErrors || paletteIsFull}
            >
              Random Color
            </Button>
          )}
          <ChromePicker
            className={classes.colorPicker}
            color={currentColor}
            onChangeComplete={updateCurrentColor}
          />
          <form autoComplete="off" onSubmit={handleColorSubmit}>
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
