import React, {useState, useEffect} from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Registerpage from './pages/Registerpage'; 
import Loginpage from './pages/Loginpage'; 
import Homepage from './pages/Homepage'; 
import Navbar from './components/Navbar'; 

function App() {
  const [name, setName] = useState(''); 
	useEffect(() => {
		(
			async() => {
				const response = await fetch('http://localhost:3002/api/user', {
					headers: {"Content-Type": "application/json"},
					credentials: "include" 
				})

				const content = await response.json(); 

				setName(content.name);  
			}
		)();
	});    

  return (
    <div>
      <Router>
        <Navbar name={name} setName={setName} />  
        <Routes>
          <Route path="/" element={<Homepage name={name} />} />  
          <Route path="/register" element={<Registerpage />} /> 
          <Route path="/login" element={<Loginpage setName={setName} />} />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
