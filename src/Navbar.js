import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'


class Navbar extends Component {
  constructor() {
    super()
    this.state = { 
      format: 'hex', 
      open: false, 
    }
    this.handleFormatChange = this.handleFormatChange.bind(this)
    this.closeSnackbar = this.closeSnackbar.bind(this)
  }

  handleFormatChange(e) {
    this.setState({ 
      format: e.target.value, 
      open: true,
    })
    this.props.handleChange(e.target.value)
  }
  closeSnackbar() {
    this.setState({
      open: false
    })
  }

  render() {
    const { level, ChangeLevel, showSlider } = this.props
    const { format } = this.state
    return(
      <nav className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        {showSlider && (
        <div className="slider-container">
          <span>Level: {level} </span>
          <div className="slider">
            <Slider 
              defaultValue={level} 
              step={100} 
              min={100} 
              max={900} 
              onAfterChange={ChangeLevel} 
            />
          </div>
        </div>
        )}
        <div id="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={this.state.open}
          message={<span id="message-id">Format Changed To {format.toUpperCase()} </span>}
          hideDuration={3000}
          ContentProps={{
            "aria-describedby":"message-id"
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
    )
  }
}

export default Navbar