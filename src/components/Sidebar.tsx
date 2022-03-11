import classes from './Sidebar.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton, SvgIcon } from '@mui/material';
import { useState } from 'react';
import menuItems from '../configs/menu-item';


const Sidebar = () => {
    const [sidebarToggle, setSidbarToggle] = useState(false);
    return (
        <div className={`${classes.sidebar} ${sidebarToggle ? classes.activeSideBar : ''}`}>
            <div className={classes.logoContent}>
                <div className={classes.logo}>
                    <div className={classes.logoName}>IDS</div>
                </div>
                <IconButton onClick={() => setSidbarToggle((prevState) => !prevState)} className={classes.toggleBtn}>{sidebarToggle ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
            </div>
            <ul className={classes.navList}>
                {menuItems.map(m => <li>
                    <div className={classes.link}>
                        <IconButton className={classes.linkIcon}><SvgIcon component={m.icon}/></IconButton>
                        <span className={classes.linkName}>{m.name}</span>
                    </div>
                    <span className={classes.tooltip}>{m.tooltip}</span>
                </li>)}
            </ul>
        </div>
    )
}

export default Sidebar;