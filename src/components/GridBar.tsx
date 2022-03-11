import { Button, MenuItem, Menu, Paper, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import GitHubIcon from '@mui/icons-material/GitHub';

const GridBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }


    return (
        <div>
            <Button
                variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <GridViewIcon />
            </Button>
            <Paper>
                <Menu
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                left: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
                        <Grid container>
                            <Grid item xs={2}>
                                <IconButton>
                                    <HomeIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} alignSelf='center'>
                                <Typography>Home</Typography>
                            </Grid>

                        </Grid>
                    </MenuItem>
                    <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
                        <Grid container>
                            <Grid item xs={2}>
                                <IconButton>
                                    <BarChartIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} alignSelf='center'>
                                <Typography>Analytics</Typography>
                            </Grid>

                        </Grid>
                    </MenuItem>
                    <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
                        <Grid container>
                            <Grid item xs={2}>
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} alignSelf='center'>
                                <Typography>GitHub</Typography>
                            </Grid>

                        </Grid>
                    </MenuItem>
                    
                </Menu>
            </Paper>
        </div>
    )
}

export default GridBar;