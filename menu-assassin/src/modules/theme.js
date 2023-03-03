import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
    palette: {
        primary: {
            main: '#005f73',
        },
        secondary: {
            main: '#ee9b00',
        },
        background: {
            default: '#001219',
            paper: '#0a9396',
        },
    },
    typography: {
        fontFamily: 'sans-serif',
    },
});

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;


/*
Background: #001219
#005f73
#0a9396
#94d2bd
#e9d8a6
#ee9b00
#ca6702
#bb3e03
#ae2012
#9b2226
*/