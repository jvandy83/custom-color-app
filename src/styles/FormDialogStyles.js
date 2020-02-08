import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paletteModal: {
    padding: '1.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  error: {
    color: 'red'
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 0'
  },
  input: {
    paddingBottom: '.5rem',
    outline: 'none',
    lineHeight: '1.4rem',
    fontSize: '1.3rem',
    boxShadow: 'inset 1px 2px 5px rgba(0, 0, 0, 0.5)',
    background: '#fff',
    color: '#525865',
    borderRadius: '.1rem'
    // border: '1px solid #d1d1d1'
  }
}));
