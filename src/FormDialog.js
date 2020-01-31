import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modals from './Modals';

const useStyles = makeStyles(theme => ({
  modal: {
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  addPalette: {
    color: 'black',
    backgroundColor: 'silver',
    '&:hover': {
      backgroundColor: 'lightgrey'
    }
  },
  error: {
    color: 'red'
  },
  goBack: {
    margin: '0 2rem'
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0'
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
  emojiPicker: {
    padding: '2rem',
    margin: '2rem'
  }
}));

export default function FormDialog({
  handleChange,
  values,
  errors,
  handleEmojiSubmit,
  handlePaletteSubmit
}) {
  const classes = useStyles();

  const [openPalette, setOpenPalette] = React.useState(false);
  const [openEmoji, setOpenEmoji] = React.useState(false);
  const [showEmojiModal, setShowEmojiModal] = React.useState(false);

  const openPaletteModal = () => {
    setOpenPalette(true);
  };

  const closePaletteModal = () => {
    setOpenPalette(false);
  };

  const openEmojiModal = () => {
    setOpenEmoji(true);
  };

  const closeEmojiModal = () => {
    setOpenEmoji(false);
    setShowEmojiModal(false);
  };

  const showEmo = () => {
    handlePaletteSubmit();
    if (!errors) {
      setShowEmojiModal(true);
      closePaletteModal();
    }
  };

  React.useEffect(() => {
    console.log('use effect');
    if (!showEmojiModal) {
      openEmojiModal();
    }
  }, [showEmojiModal]);

  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to="/">
        <Button
          className={classes.goBack}
          onClick={closePaletteModal}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Go Back
        </Button>
      </Link>
      <Button
        className={classes.addPalette}
        variant="outlined"
        color="primary"
        onClick={openPaletteModal}
      >
        Add Palette
      </Button>
      <Dialog
        className={classes.modal}
        open={openPalette}
        onClose={closePaletteModal}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.modal}>
          <DialogTitle id="form-dialog-title">
            {errors.isPaletteNameUnique ? (
              <span className={classes.error}>
                {errors.isPaletteNameUnique}
              </span>
            ) : (
              'Enter Palette Name'
            )}
          </DialogTitle>
          <Divider />
          <div>
            <input
              className={classes.input}
              type="text"
              name="paletteName"
              onChange={handleChange}
              value={values.paletteName || ''}
              required
            />
          </div>
          <div className={classes.btnContainer}>
            <Button
              onClick={showEmo}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save Palette
            </Button>
          </div>
        </div>
      </Dialog>
      <Modals
        handleEmojiSubmit={handleEmojiSubmit}
        open={openEmoji}
        close={closeEmojiModal}
        showEmojiModal={showEmojiModal}
        setShowEmojiModal={setShowEmojiModal}
      />
    </div>
  );
}
