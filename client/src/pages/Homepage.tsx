import React, {useState, useEffect} from 'react';   
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
import Navbar from '../components/Navbar'; 
import {useNavigate} from 'react-router-dom'; 

const Homepage = () => {
	const [name, setName] = useState(''); 
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register');  
	const toLogin = () => navigate('/login'); 

	useEffect(() => {
		(
			async() => {
				const response = await fetch('http://localhost:3002/api/user', {
					method: 'GET', 
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
			<Box>
				<Navbar /> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}> 
				<Typography variant="h3"> 
					{name ? `Welcome ${name}` : `You are not logged in.`}  
				</Typography>
			</Box>
			<Box sx={{textAlign: 'center'}}>
				<Button variant="contained" onClick={toRegister}>Register</Button> 
				<Button variant="contained" onClick={toLogin}>Login</Button>  
			</Box>
		</div>
	)
}

export default Homepage; 