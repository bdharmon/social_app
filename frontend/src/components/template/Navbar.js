import React from 'react';
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

const Home = () => {

    return (

        <AppBar position='static'>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box><Typography>LOGO</Typography></Box>
                <Box style={{ display: 'flex', justifyContent: 'evenly', width: '100%' }}>
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
                    >
                        <AccountCircle />
                    </IconButton></Box>
            </Toolbar>
        </AppBar>

    );

};

export default Home;