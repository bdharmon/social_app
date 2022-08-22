import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState({
        userTable: [],
        loading: false
    });

    const getData = async () => {
        try {
            setData({ ...data, loading: true });
            const response = await axios.get('http://localhost:9001/users/all');
            console.log(response.data);
            setData({ ...data, userTable: response.data })
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role(s)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.userTable.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.roles[0].name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

};

export default Home;