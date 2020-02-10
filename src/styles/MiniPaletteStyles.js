export default {
  root: {
    border: '1px solid black',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '2px 2px 10px rgb(0, 0, 0, 0.5)',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  deleteOverlay: {},
  deleteIcon: {
    position: 'absolute',
    display: 'flex',
    width: '15%',
    height: '15%',
    top: 0,
    right: 0,
    opacity: 0,
    backgroundColor: '#d11a2a',
    transition: 'all 0.3s ease-in-out',
    zIndex: 10,
    margin: 'auto',
    color: 'white'
  },
  colors: {
    background: 'white',
    height: '150px',
    width: '100%',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    postition: 'relative',
    marginBottom: '-3.8px'
  }
};
