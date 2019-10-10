import React, { Component } from 'react'
import './PaletteList.css'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return(
      <div className="PaletteList">
        <h1>Palette List</h1>
        <div className="palettes">
          {palettes.map(palette => (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          ))}
        </div>
      </div>
    )
  }
}

export default PaletteList