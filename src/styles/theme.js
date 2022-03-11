import { createTheme } from "@mui/material";
import { grey, blue } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#fff' },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[50],
    },
    text: {
      primary: '#000'
    }
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[400],
    },
    text: {
      primary: '#fff'
    }
  },
});
