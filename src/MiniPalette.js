import React from 'react';
import { withStyles } from "@material-ui/styles";
// import { flexbox } from '@material-ui/system';
// import { TextareaAutosize, Grid } from '@material-ui/core';

const styles = {
  root: {
    // margin: "auto",
    width: "250px",
    border: "1px solid black",
    background: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    boxShadow: "2px 2px 10px rgb(0, 0, 0, 0.5)",
    "&:hover":  {
      cursor: "pointer",
    },
  },
  colors: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 50px)", 
    gridTemplateRows: "repeat(4, 50px)",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props
  return(
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {colors.map(item => (
            <div style={{background: item.color}}></div>
        ))}
      </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)