import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
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
        moreUrl={`/palette/${color.id}/${id}`} 
      />
    ))
    return(
      <div className="Palette">
        <Navbar 
          handleChange={this.ChangeFormat} 
          level={level} 
          ChangeLevel={this.ChangeLevel} 
        />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <footer className="Palette-footer">{paletteName} 
          <span>{emoji}</span>
        </footer>
      </div>
    )
  }
}

export default Palette