import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import './PaletteList.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes } = this.props
    return(
      <div className="PaletteList">
        <div className="PaletteList-title">
          <h1>React Palette</h1>
          <Link className="link" to="/">Create Palette</Link>
        </div>
        <div className="palettes">
          {palettes.map(palette => (
              <MiniPalette handleClick={() => this.goToPalette(palette.id)} {...palette} />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(PaletteList)