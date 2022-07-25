import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [tokenInfo, setTokenInfo] = useState({});

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const token = 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXJyZWxsLmt1cGhhbCIsInVzZXJfaWQiOiJlZjc4ZGQ5OS03ODc5LTRjYmItYTljYS04NTMwOTFmNDE5MDYiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNjU4NzA4ODg0LCJleHAiOjE2NTk4NDQ4MDB9.1uScPx3ZKDH8HQIE9-Weh9299RDapVVIhATOeqO6MXdnnw-T6ZB1zoafSfgmTD8Q';
        const decoded = jwtDecode(token);
        console.log(decoded);
        setTokenInfo(decoded);
    }, []);

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
                        <Typography style={{ padding: '6px 16px' }}>{tokenInfo['sub']}</Typography>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>

    );

};

export default Navbar;