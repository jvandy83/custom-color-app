export default {
  root: {
    margin: 'auto',
    width: '250px',
    border: '1px solid black',
    background: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '2px 2px 10px rgb(0, 0, 0, 0.5)',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    background: 'grey',
    height: '150px',
    width: '100%'
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
    marginBottom: '-3.5px'
  }
};
