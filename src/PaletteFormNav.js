import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormDialog from './FormDialog';
import clsx from 'clsx';
import { useStyles } from './styles/PaletteFormNavStyles';

const PaletteFormNav = ({
  open,
  handleEmojiSubmit,
  handlePaletteSubmit,
  submittingPalette,
  submittingEmoji,
  handleDrawerOpen,
  history,
  errors,
  handleChange,
  values
}) => {
  const classes = useStyles();

  const [openPalette, setOpenPalette] = useState(false);

  const openPaletteModal = () => {
    setOpenPalette(true);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.nav}>
          <div className={classes.menuButton}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.btnContainer}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button
                className={classes.goBack}
                variant="contained"
                color="secondary"
                type="submit"
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.addPalette}
              onClick={openPaletteModal}
              variant="outlined"
              color="primary"
            >
              Add Palette
            </Button>
          </div>
          <FormDialog
            handleDrawerOpen={handleDrawerOpen}
            handleEmojiSubmit={handleEmojiSubmit}
            handlePaletteSubmit={handlePaletteSubmit}
            submittingPalette={submittingPalette}
            submittingEmoji={submittingEmoji}
            history={history}
            errors={errors}
            handleChange={handleChange}
            values={values}
            openPalette={openPalette}
            setOpenPalette={setOpenPalette}
            openPaletteModal={openPaletteModal}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
