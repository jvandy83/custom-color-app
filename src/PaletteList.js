import React from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import useStyles from './styles/PaletteListStyles';

const PaletteList = ({ history, palettes, deletePalette }) => {
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <h1>React Palette</h1>
          </div>
          <div className={classes.createPaletteLink}>
            <Link to="/palette/new">Create Palette</Link>
          </div>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette, i) => (
            <MiniPalette
              id={palette.id}
              key={palette.id}
              {...palette}
              deletePalette={deletePalette}
              goToPalette={goToPalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletteList;
