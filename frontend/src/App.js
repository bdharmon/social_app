import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/template/Navbar';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authorization')) {
      setAuthenticated(true);
    }
  }, []);

  // if (!authenticated) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/">
  //           <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  return (

    <BrowserRouter>

      {authenticated && <Navbar />}

      <Routes>
        {!authenticated ? <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} /> :

          <Route path="/">
            <Route path="login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
            <Route path="home" index element={<p>home</p>} />
          </Route>
        }
      </Routes>

    </BrowserRouter>
  );

}

export default App;