import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';

const Login = () => {
    const initialCredentialsState = {
        username: {
            input: '',
            label: 'Username',
            error: false,
            errorMsg: ''
        },
        password: {
            input: '',
            label: 'Password',
            error: false,
            errorMsg: ''
        }
    };

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [loginError, setLoginError] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const credentialsChangeHandler = (e) => {
        const credentialsCopy = { ...credentials };
        credentialsCopy[e.target.name]['input'] = e.target.value;
        setCredentials(credentialsCopy);
    };

    const credentialsValidation = () => {
        let valid = true;

        const credentialsCopy = { ...credentials };
        for (const credential in credentialsCopy) {
            if (credentialsCopy[credential]['input'] == null || credentialsCopy[credential]['input'].trim() === '') {
                credentialsCopy[credential]['errorMsg'] = `${credentialsCopy[credential]['label']} required.`;
                credentialsCopy[credential]['error'] = true;
                valid = false;
            }
        }

        if (!valid) {
            setLoginError(true);
        }

        setCredentials(credentialsCopy)
        return valid;
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        setLoginError(false);

        if (!credentialsValidation()) {
            return;
        }

        const loginCredentialsRequest = {
            username: credentials.username.input,
            password: credentials.password.input
        };

        setLoginLoading(true);

        axios.post('http://localhost:9001/auth/login', loginCredentialsRequest)
            .then(response => {
                console.log("Response:", response);
                console.log("Token:", response.headers['authorization']);
                localStorage.clear();
                localStorage.setItem('authorization', response.headers['authorization']);
                return response.data;
            })
            .then(data => {
                console.log("Data:", data);
                setLoginLoading(false);
                setCredentials(initialCredentialsState);
            })
            .catch(error => {
                console.error("Error:", error);
                setLoginLoading(false);
                setCredentials(initialCredentialsState);
                setLoginError(true);
            })
    };

    return (

        <Card raised={true} style={{ margin: '24px', maxWidth: '500px', width: '100%' }}>

            <form style={{ padding: '24px', width: '100%' }} onSubmit={loginSubmitHandler}>
                <Stack>
                    {loginError && <Alert severity="error">Invalid Username/Password.</Alert>}

                    <Typography style={{ marginBottom: '24px', marginTop: '24px', textAlign: 'center' }} variant='h4'>Login</Typography>

                    <TextField id='username' style={{ marginBottom: '24px' }} label={credentials.username.label} error={credentials.username.error} helperText={credentials.username.errorMsg} variant="outlined" name='username' type="text" value={credentials.username.input} onChange={(e) => credentialsChangeHandler(e)} />

                    <TextField id='password' style={{ marginBottom: '24px' }} label={credentials.password.label} error={credentials.password.error} helperText={credentials.password.errorMsg} variant="outlined" name='password' type="password" value={credentials.password.input}
                        onChange={(e) => credentialsChangeHandler(e)} />

                    <Button style={{ marginBottom: '24px' }} variant="contained" type='submit'>Login</Button>
                    {loginLoading && <LinearProgress />}
                </Stack>
            </form>

        </Card>

    );

}

export default Login