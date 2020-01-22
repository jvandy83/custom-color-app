import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3px',
    cursor: 'pointer',
    margin: '0 auto',
    height: '25%',
    width: '20%',
    '&:hover svg': {
      color: '#fbfaee',
      transform: 'scale(1.2)'
    }
  },
  boxContent: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'absolute',
    fontSize: '0.8rem',
    padding: '0.6rem',
    color: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

function DraggableColorBox(props) {
  const { classes, color, name, removeColorBox } = props;

  const handleRemove = () => {
    removeColorBox(name);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteForeverIcon
          className={classes.deleteIcon}
          onClick={handleRemove}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
