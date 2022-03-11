import GridViewIcon from '@mui/icons-material/GridView';
import { SvgIconProps } from '@mui/material/SvgIcon';


type menuItemsTypes = {
    name: string;
    icon: (props: SvgIconProps) => JSX.Element;
    tooltip: string;
}[]

const menuItems : menuItemsTypes = [
    {
        name: 'Dashboard',
        icon: GridViewIcon,
        tooltip: 'Dasboard',
    }
]

export default menuItems;