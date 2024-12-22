import { useState } from 'react';
import { Link } from "react-router";
import AuthButton from "../common/AuthButton";
// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// icons 
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const drawerWidth = 240;

interface NavLinks {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  path: string
}

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);


  const NavLinks: NavLinks[] = [
    { icon: < HomeIcon />, label: 'Home', path: "/" },
    { icon: <DashboardIcon />, label: 'Dashboard', path: "/dashboard", active: true },
    { icon: <CalendarMonthIcon />, label: 'Schedule', path: "" },
    { icon: <BookIcon />, label: 'Courses', path: "" },
    { icon: <SchoolIcon />, label: 'Gradebook', path: "" },
    { icon: <StackedLineChartIcon />, label: 'Performance', path: "" },
    { icon: <AddAlertIcon />, label: 'Announcement', path: "" }
  ]

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='bg-gradient-to-b from-customDarkBlue to-customLightBlue h-screen'>
      {/* sidebar header */}
      <Toolbar >
        <Typography variant="h2" className='!text-[20px] text-slate-300 !font-bold'>
          Anyware Software
        </Typography>
      </Toolbar >
      <Divider />
      <List>
        {NavLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <Link to={link.path}>
              <ListItemButton>
                <ListItemIcon className='!text-slate-300'>
                  {link.icon}
                </ListItemIcon>
                <ListItemText className='text-slate-300' primary={link.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Divider />
        <Box className="mt-8">
          <AuthButton />
        </Box>
      </List>
    </div >
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="flex">
      <CssBaseline />
      <AppBar
      className='!bg-gradient-to-b from-customDarkBlue to-customLightBlue'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='flex justify-between'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome Hashim
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}
