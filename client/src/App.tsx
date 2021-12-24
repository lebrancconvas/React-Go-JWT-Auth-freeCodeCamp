import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Registerpage from './pages/Registerpage'; 
import Loginpage from './pages/Loginpage'; 
import Homepage from './pages/Homepage'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/register" element={<Registerpage />} /> 
          <Route path="/login" element={<Loginpage/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
