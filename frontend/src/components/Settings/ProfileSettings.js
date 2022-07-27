import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const ProfileSettings = () => {
    return (
        <List>

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemText primary="Username" secondary="username" />
            </ListItem>

            <Divider component="li" />

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemText primary="Bio" />
            </ListItem>

        </List>
    );
};

export default ProfileSettings;