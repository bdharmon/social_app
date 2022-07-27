import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SecuritySettings = () => {
    const [isProfilePrivate, setProfilePrivate] = useState(true);
    
    return (
        <List>

            <ListItem
                secondaryAction={
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Public</Typography>
                        <Switch checked={isProfilePrivate} onChange={() => setProfilePrivate(prev => !prev)} />
                        <Typography>Private</Typography>
                    </Stack>
                }
            >
                <ListItemText primary="Profile Visibility" secondary={`Your profile visibility is set to ${isProfilePrivate ? 'PRIVATE.' : 'PUBLIC.'}`} />
            </ListItem>

            <Divider component="li" />

            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                }
            >
                <ListItemText primary="Blocked Users" />
            </ListItem>

        </List>
    );
};

export default SecuritySettings;