import { AppBar,Box, Switch, FormControlLabel, FormGroup, Grid, Theme } from "@mui/material";
import {darkTheme, lightTheme} from '../styles/theme';
import GridBar from './GridBar';


type NavbarProps = {
    onThemeChange: (f: Theme) => void,
}

const stylePadding = {
    padding: '0.8rem 2rem',
}

const Navbar = (props: NavbarProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            console.log('Checked')
            props.onThemeChange(darkTheme);
        }
        else{
            props.onThemeChange(lightTheme);
        }
      };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{...stylePadding}} position="static">
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                       <GridBar/> 
                    </Grid>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel onChange={handleChange} control={<Switch defaultChecked={false} color='secondary' />} label="Dark Mode" />
                        </FormGroup>
                    </Grid>
                </Grid>



            </AppBar>
        </Box>
    )
}

export default Navbar;