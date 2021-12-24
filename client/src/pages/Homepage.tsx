import React from 'react'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
import Navbar from '../components/Navbar'; 
import {useNavigate} from 'react-router-dom'; 

const Homepage = () => {
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register');  
	const toLogin = () => navigate('/login'); 
	return (
		<div>
			<Box>
				<Navbar /> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}> 
				<Typography variant="h3"> 
					Welcome to the website 
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