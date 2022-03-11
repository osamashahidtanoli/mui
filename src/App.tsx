import { useEffect, useState, useMemo } from 'react';
import { useAppDispatch } from './store/hooks';
import { getUser } from './store/ducks/users'
import { CssBaseline, Container, Grid, ThemeProvider, Theme, createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lightTheme } from './styles/theme';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Sidebar from './components/Sidebar';
import classes from './components/Sidebar.module.css';

function App() {

  const dispatch = useAppDispatch();
  const [customTheme, setCustomTheme] = useState<Theme>(lightTheme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  console.log(`FOR USER PREFERENCE ${theme}`)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  const themeChangeHandler = (themeVal: Theme) => {
    setCustomTheme(themeVal);
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Navbar onThemeChange={themeChangeHandler} />
      <Sidebar />
      <div className={classes.homeContent}>
        <Container>
          {/* <Button  sx={{marginTop: '10px'}} variant='contained'>Material UI</Button> */}
          <Grid container justifyContent='center'>
            <Grid item md={8}>
              <Todo />
            </Grid>
          </Grid>

        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
