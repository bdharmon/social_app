import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

const Navbar = ({ setAuthenticated, authToken }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('authorization');
        localStorage.clear();
        setAuthenticated(false);
    };

    return (

        <AppBar position='static'>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box><Typography>LOGO</Typography></Box>

                <Box style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                    <Typography>Services</Typography>
                    <Typography>About</Typography>
                    <Typography>Contact Us</Typography>
                </Box>

                <Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Typography style={{ padding: '6px 16px' }}>{authToken['sub']}</Typography>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem style={{ padding: '0px' }}><Link to="/settings" style={{ textDecoration: 'none', width: '100%', padding: '6px 16px' }} onClick={handleClose}>Settings</Link></MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>

    );

};

export default Navbar;