import React, { Component } from 'react';
import Palette from './Palette'
import seedColors from './SeedColor'
import './App.css';
import { generatePalette } from './colorHelper'

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return(
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    )
  }
}

export default App;
