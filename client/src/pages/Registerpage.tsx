import React, {SyntheticEvent, useState} from 'react'; 
import {Navigate} from 'react-router-dom';  
import {Typography, Button, TextField} from '@mui/material';
import {Box} from '@mui/system'; 
import Navbar from '../components/Navbar'; 

const Registerpage = () => {
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [redirect, setRedirect] = useState(false); 
	const registerSubmit = async(e: SyntheticEvent) => {
		e.preventDefault(); 

		await fetch('http://localhost:3002/api/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username,
				password 
			})
		}); 
		
		setRedirect(true); 
		//const content = response.json(); 
		//console.log(content); 
	}; 

	if(redirect) {
		return <Navigate to="/login" />  	
	}

	return (
		<div>
			<Box>
				<Navbar /> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}>   
				<Typography variant="h2"> 
					Register
				</Typography>
			</Box>
			<Box mt={3} sx={{textAlign: 'center'}}>  
				<form onSubmit={registerSubmit}>  
					<Box>
						<TextField style={{width: '50%'}} type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />  
					</Box>
					<Box mt={1}>
						<TextField style={{width: "50%"}} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required /> 
					</Box>
					<Box mt={2}> 
						<Button type="submit" variant="contained">Register</Button> 
					</Box>
				</form>
			</Box>
		</div> 
	)
}


export default Registerpage;  