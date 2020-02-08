import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './styles/FormDialogStyles';
import { PickerModal } from './PickerModal';

export default function FormDialog({
  handleChange,
  values,
  errors,
  handleEmojiSubmit,
  handlePaletteSubmit,
  submittingPalette,
  submittingEmoji,
  openPalette,
  setOpenPalette
}) {
  const classes = useStyles();

  const errorsLength = Object.keys(errors).length;

  const [openEmoji, setOpenEmoji] = useState(false);

  const closePaletteModal = () => {
    setOpenPalette(false);
  };

  const closeEmojiModal = () => {
    setOpenEmoji(false);
  };

  useEffect(() => {
    if (submittingPalette && errorsLength === 0) {
      setOpenEmoji(true);
    } else if (submittingPalette && submittingEmoji) {
      setOpenEmoji(false);
    }
  }, [submittingPalette, errorsLength, submittingEmoji]);

  return (
    <div>
      <Dialog open={openPalette} onClose={closePaletteModal}>
        <div className={classes.paletteModal}>
          <DialogTitle className={errorsLength > 0 ? classes.error : ''}>
            {errors.isPaletteNameUnique
              ? errors.isPaletteNameUnique
              : 'Name your Palette'}
          </DialogTitle>
          <Divider />
          <input
            className={classes.input}
            type="text"
            name="paletteName"
            onChange={handleChange}
            value={values.paletteName || ''}
            required
          />
          <div className={classes.btnContainer}>
            <Button
              onClick={handlePaletteSubmit}
              variant="contained"
              color="primary"
            >
              Save Palette Name
            </Button>
          </div>
        </div>
      </Dialog>
      <Dialog open={openEmoji} onClose={closeEmojiModal}>
        <PickerModal handleEmojiSubmit={handleEmojiSubmit} />
      </Dialog>
    </div>
  );
}
