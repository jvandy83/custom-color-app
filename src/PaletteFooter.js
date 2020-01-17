import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter() {
  const { paletteName, emoji, classes } = this.props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
