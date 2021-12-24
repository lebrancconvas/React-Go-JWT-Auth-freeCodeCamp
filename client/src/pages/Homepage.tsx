import React from 'react';   
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
// import Navbar from '../components/Navbar'; 
import {useNavigate} from 'react-router-dom'; 

const Homepage = (props: {name: string}) => {
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register');  
	const toLogin = () => navigate('/login'); 
	

	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={2}> 
				<Typography variant="h3"> 
					{props.name ? `Welcome ${props.name}` : `You are not logged in.`}  
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