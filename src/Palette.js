import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import {PaletteFooter} from './PaletteFooter'
import './Palette.css'



class Palette extends Component { 
  constructor(props) {
    super(props) 
    this.state = {
      level: 500,
      format: 'hex'
    }
    this.ChangeFormat = this.ChangeFormat.bind(this)
    this.ChangeLevel = this.ChangeLevel.bind(this)
  }
  ChangeLevel(level) {
    this.setState({ level })
  }
  ChangeFormat(format) {
    this.setState({ format })
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette
    const { level, format } = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        key={color.id} 
        format={this.state.format} 
        background={color[format]} 
        name={color.name}
        moreUrl={`/palette/${id}/${color.id}`} 
        showingFullPalette={true}
      />
    ))
    return(
      <div className="Palette">
        <Navbar 
          handleChange={this.ChangeFormat} 
          level={level} 
          ChangeLevel={this.ChangeLevel} 
          showSlider={true}
        />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default Palette