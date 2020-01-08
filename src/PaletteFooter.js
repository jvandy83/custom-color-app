import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

class PaletteFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { paletteName, emoji, classes } = this.props;
    return (
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span>{emoji}</span>
      </footer>
    );
  }
}

// export default withStyles(styles)(PaletteFooter);
export default withStyles(styles)(PaletteFooter);
