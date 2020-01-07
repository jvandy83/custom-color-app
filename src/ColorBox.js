import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/styles'
import './ColorBox.css'

const styles = {
  ColorBox: {
    display: "inline-block",
    position: "relative",
    marginBottom: "-3px",
    cursor: "pointer",
    margin: "0 auto",
    height: props => 
      props.showingFullPalette ? '25%' : '50%',
    width: "20%",
    '&:hover button': {
      opacity: '1'
    }
  },
  copyText: {
    color: props => 
      chroma(props.background).luminance() >= 0.65 ? 'rgba(0,0,0,0.5)' : '#eeeeee'
  },
  colorName: {
    color: props => 
      chroma(props.background).luminance() <= 0.8 ? '#eeeeee' : 'rgba(0,0,0,0.5)'
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "4rem",
    height: "2rem",
    textAlign: "center",
    lineHeight: "2rem",
    textTransform: "uppercase",
    color: props => 
      chroma(props.background).luminance() >= 0.55 ? 'rgba(0,0,0,0.5)' : '#eeeeee'
    },
  copyButton: {
    background: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    display: "inline-block",
    textDecoration: "none",
    marginTop: "-0.9rem",
    position: "absolute",
    marginLeft: "-3rem",
    lineHeight: "1.8rem",
    textEmphasis: "none",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "1rem",
    height: "1.8rem",
    outline: "none",
    color: "white",
    border: "none",
    width: "6rem",
    left: "50%",
    top: "50%",
    opacity: '0',
    color: props => 
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  boxContent: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    position: "absolute",
    fontSize: "0.8rem",
    padding: "0.6rem",
    color: "black",
    width: "100%",
    bottom: "0",
    left: "0",
  },
  copyMessage: {
    justifyContent: "center",
    flexDirection: "column",
    transform: "scale(0.1)",
    alignItems: "center",
    position: "fixed",
    fontSize: "4rem",
    display: "flex",
    color: "white",
    opacity: "0",
    bottom: "0",
    right: "0",
    left: "0",
    top: "0"
  },
  showOverlay
}

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
    this.changeCopyState = this.changeCopyState.bind(this)
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false}), 1500)
    })
  }
  handleClick(e) {
    e.stopPropagation()
  }
  render() {
    const {classes, name, background, moreUrl, showingFullPalette} = this.props
    console.log(this.props)
    const { copied } = this.state
    return(
      <CopyToClipboard text={background} onCopy={this.changeCopyState} >
        <div style={{ background }} className={classes.ColorBox}>
          <div 
            style={{ background }} 
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{name}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
          <Link to={moreUrl} onClick={this.handleClick}>
            <span className={classes.seeMore}>More</span>
          </Link>    
          )}
        </div>
      </CopyToClipboard >
    )
  }
}

export default withStyles(styles)(ColorBox)