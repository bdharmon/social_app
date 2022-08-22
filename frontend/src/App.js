import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import jwtDecode from 'jwt-decode';
import PrivateRoutes from "./components/Auth/PrivateRoutes";
import Settings from "./components/Settings/Settings";
import Home from "./components/Home/Home";

const App = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authorization'));
  const [authToken, setAuthToken] = useState({});

  useEffect(() => {
    if (authenticated) {
      setAuthToken(jwtDecode(localStorage.getItem('authorization')));
      setAuthenticated(true);
    }
    else {
      setAuthToken({});
      setAuthenticated(false);
    }
  }, [authenticated]);

  return (

    <BrowserRouter>

      <Routes>
        <Route element={<PrivateRoutes authenticated={authenticated} setAuthenticated={setAuthenticated} authToken={authToken} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<p>about</p>} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} authToken={authToken} />} />
      </Routes>

    </BrowserRouter>

  );

}

export default App;