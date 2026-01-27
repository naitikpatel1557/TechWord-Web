import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  //Whether dark mode is enabled or not in navbar
  const [mode, setMode] = useState('light');

  // Alert State
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {                                                                // Alert disappears after 2 seconds
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled!", "Success!");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "Success!");
    }
  }


  return (
    // '<>' JSX fragment to wrap multiple elements for OWN HTML Code
    <>
    <Router>

      <Navbar title="TechWord" about="About us" mode={mode} toggleMode={toggleMode} />                                                        {/* Using Navbar component here code is available in src/components/Navbar.js */}

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/about"                                                                        //Redirect the about page when I click the About Us Button using react router
            element={<About mode={mode} />} 
          />

          <Route exact path="/" 
            element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}
          />
        </Routes>
      </div>

      {/* <About /> */}
    </Router>
    </>
  );
}

export default App;
