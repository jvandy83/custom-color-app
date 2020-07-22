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
  const [exit, setExit] = useState(true);
  const [deletingPalette, setDeletingPalette] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    setDeletingPalette(true);
    return setExit(false), setTimeout(() => setExit(true), 1000);
  };

  const handleOpenModal = e => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleLink = () => {
    goToPalette(id);
  };

  React.useEffect(() => {
    if (exit && deletingPalette) {
      deletePalette(id);
    }
  }, [exit, deletePalette, deletingPalette, id]);

  const miniColorBoxes = colors.map((color, i) => (
    <div
      key={i}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div>
      <Dialog open={open} onClose={close}>
        <DialogTitle>Are you sure?</DialogTitle>
        <Button onClick={handleDelete} vaiant="contained" color="secondary">
          Delete
        </Button>
        <Button onClick={close} vaiant="contained" color="primary">
          Cancel
        </Button>
      </Dialog>
      <div
        className={!exit ? classes.rootFadeExit : classes.root}
        onClick={handleLink}
      >
        <div
          onClick={e => handleOpenModal(e)}
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
