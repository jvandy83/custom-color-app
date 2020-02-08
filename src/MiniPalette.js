import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette({
  classes,
  paletteName,
  deletePalette,
  goToPalette,
  emoji,
  colors,
  id
}) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deletePalette(id);
  };

  const handleOpenModal = e => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleLink = () => {
    goToPalette(id);
  };

  const miniColorBoxes = colors.map((color, i) => (
    <div
      key={i}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className="container">
      <Dialog open={open} onClose={close}>
        <DialogTitle>Are you sure?</DialogTitle>
        <Button onClick={handleDelete} vaiant="contained" color="secondary">
          Delete
        </Button>
        <Button onClick={close} vaiant="contained" color="primary">
          Cancel
        </Button>
      </Dialog>
      <div className={classes.root} onClick={handleLink}>
        <div
          onClickCapture={e => handleOpenModal(e)}
          className={classes.deleteOverlay}
        >
          <DeleteForeverIcon className={classes.deleteIcon}>
            Delete Palette
          </DeleteForeverIcon>
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
