import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AccountSettings from './AccountSettings';
import ProfileSettings from './ProfileSettings';
import SecuritySettings from './SecuritySettings';

const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
        <div style={{ display: value !== index ? 'none' : 'block' }}>
            {value === index && <>{children}</>}
        </div>
    );
};

const Settings = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography style={{ textAlign: 'center' }}>Settings</Typography>
            <div style={{ display: 'flex', maxWidth: '100%', width: '100%' }}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderRight: 1, borderColor: 'divider', width: 'max-content' }}
                >
                    <Tab label="Account" />
                    <Tab label="Profile" />
                    <Tab label="Security" />
                </Tabs>

                <Box style={{ paddingLeft: '16px', width: '100%' }}>
                    <TabPanel value={value} index={0}><AccountSettings /></TabPanel>
                    <TabPanel value={value} index={1}><ProfileSettings /></TabPanel>
                    <TabPanel value={value} index={2}><SecuritySettings /></TabPanel>
                </Box>
            </div>
        </Box>
    );
};

export default Settings;