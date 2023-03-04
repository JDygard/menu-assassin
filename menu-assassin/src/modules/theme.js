import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001219',
    },
    secondary: {
      main: '#005f73',
    },
    success: {
      main: '#0a9396',
    },
    info: {
      main: '#94d2bd',
    },
    warning: {
      main: '#e9d8a6',
    },
    error: {
      main: '#ee9b00',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    background: {
      default: '#001219',
      paper: '#0a9396',
    },
    action: {
      active: '#ffffff',
      hover: '#94d2bd',
      selected: '#e9d8a6',
      disabled: '#bb3e03',
      disabledBackground: '#ca6702',
    },
  },
});

export default theme;
