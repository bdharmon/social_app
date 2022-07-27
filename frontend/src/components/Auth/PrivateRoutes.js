import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from '../template/Navbar';

const PrivateRoutes = ({ authenticated, setAuthenticated, authToken }) => {
    return (
        authenticated ?

            <>
                <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} authToken={authToken} />
                <Container style={{padding: '24px'}}><Outlet /></Container>
            </>

            :

            <Navigate to="/login" />
    );
};

export default PrivateRoutes;