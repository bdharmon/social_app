import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const AccountSettings = () => {

    return (
        <List>

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemText primary="Email Address" secondary="user@email.com" />
            </ListItem>

            <Divider component="li" />

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemText primary="Password" />
            </ListItem>

        </List>
    );

};

export default AccountSettings;