import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles/NavbarStyles';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      format: 'hex',
      open: false,
      showDropdown: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open: true
    });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({
      open: false
    });
  }

  toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  }

  render() {
    const { level, ChangeLevel, showSlider, classes } = this.props;
    const { format } = this.state;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showSlider && (
          <div>
            <span className={classes.levelTitle}>Level: {level} </span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                step={100}
                min={100}
                max={900}
                onAfterChange={ChangeLevel}
              />
            </div>
            <div>
              <div
                style={{ display: this.state.showDropdown ? 'block' : 'none' }}
                className={classes.mobileMenuContainer}
              >
                <div>
                  <Select
                    style={{
                      display: this.state.showDropdown ? 'block' : 'none'
                    }}
                    // disableUnderline
                    value={format}
                    onChange={this.handleFormatChange}
                  >
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">
                      RGBA - rgba(255, 255, 255, 1.0)
                    </MenuItem>
                  </Select>
                </div>
                <div
                  className={classes.mobileSlider}
                  style={{
                    display: this.state.showDropdown ? 'block' : 'none'
                  }}
                >
                  <Slider
                    defaultValue={level}
                    step={100}
                    min={100}
                    max={900}
                    onAfterChange={ChangeLevel}
                  />
                </div>
              </div>
              <button
                onClick={this.toggleDropdown}
                className={classes.menuButton}
              >
                Menu
              </button>
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select
            disableUnderline
            value={format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          key={format}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color={'inherit'}
              aria-label={'Close'}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
