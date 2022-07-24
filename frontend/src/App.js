import './App.css';
import Box from '@mui/material/Box';
import Login from './components/Login/Login';
import Navbar from './components/template/Navbar';

const App = () => {

  return (

    // <Box sx={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   width: '100%',
    //   height: '100vh',
    //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(43,43,98,1) 8%, rgba(0,112,171,1) 100%)'
    // }}
    // >
    //   <Login />
    // </Box>

    <Navbar />

  );

}

export default App;