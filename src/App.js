import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './SeedColor';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './colorHelper';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    savedPalettes = savedPalettes.length === 0 ? null : savedPalettes;
    this.state = { palettes: savedPalettes || seedColors };
  }

  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  findPalette = (id) => {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  };

  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };

  clearStorage = () => {
    window.localStorage.clear();
  };

  deletePaletteLocalStorage = (id) => {
    let updatedPalette = null;
    // check localStorage first
    let paletteArray = JSON.parse(localStorage.getItem('palettes'));
    if (paletteArray.length) {
      console.log('inside paletteArray "isTrue" if statement');
      updatedPalette = paletteArray.filter((p) => p.id !== id);
    } else {
      console.log('inside seed db else statement');
      // if localStorage is empty
      // we know that the colors must
      // be coming from our seed database
      updatedPalette = seedColors.filter((p) => p.id !== id);
    }
    this.setState({ palettes: updatedPalette }, this.syncLocalStorage);
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup style={{ position: 'relative' }}>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <section
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%'
                }}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                      <PaletteList
                        deletePalette={this.deletePaletteLocalStorage}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={(routeProps) => (
                      <NewPaletteForm
                        maxColors={20}
                        starterPalette={seedColors}
                        seedColors={this.state.palettes}
                        savePalette={this.savePalette}
                        {...routeProps}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    )}
                  />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
