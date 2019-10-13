import React from 'react'
import './Palette.css'

export function PaletteFooter(props) {
  return(
    <footer className="Palette-footer">{props.paletteName} 
      <span>{props.emoji}</span>
    </footer>
  )
}