import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Registerpage from './pages/Registerpage'; 
import Loginpage from './pages/Loginpage'; 
import Landingpage from './pages/Landingpage'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} /> 
          <Route path="/register" element={<Registerpage />} /> 
          <Route path="/login" element={<Loginpage/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
