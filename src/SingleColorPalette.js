import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {PaletteFooter} from './PaletteFooter'
import { Link } from 'react-router-dom'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = {
      format: "hex",
    }
    this.changeFormat = this.changeFormat.bind(this)
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }
  changeFormat(format) {
    this.setState({ format })
  }
  render() {
    const { format } = this.state
    const { paletteName, emoji, id } = this.props.palette
    const colorBoxes = this._shades.map(color => (
        <ColorBox key={color.name} keyname={color.name} background={color[format]} showLink={false} />
    ))
    return(
      <div className="SingleColorPalette Palette">
        <Navbar showSlider={false} handleChange={this.changeFormat} />
          <div className="Palette-colors">{colorBoxes}
            <div className="go-back ColorBox">
              <Link className="back-button" to={`/palette/${id}`}>Go Back</Link>
            </div>
          <div className="empty-box-link">
          </div>
          </div>
        <div className="Palette-footer">
          <PaletteFooter emoji={emoji} paletteName={paletteName} /> 
        </div>
      </div>
    )
  }
}

export default SingleColorPalette