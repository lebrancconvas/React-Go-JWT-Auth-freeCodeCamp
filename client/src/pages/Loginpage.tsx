import React, {SyntheticEvent, useState} from 'react'; 
import {Navigate} from 'react-router-dom'; 
import {Typography, Button, TextField} from '@mui/material';
import {Box} from '@mui/system'; 
// import Navbar from '../components/Navbar'; 

const Loginpage = (props: {setName: (name: string) => void}) => { 
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [redirect, setRedirect] = useState(false);  
	const loginSubmit = async(e: SyntheticEvent) => {
		e.preventDefault(); 
		
		const response = await fetch('http://localhost:3002/api/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
			body: JSON.stringify({
				username,
				password 
			})
		})

		const content = await response.json(); 
		
		setRedirect(true);

		const changeName = () => props.setName(content.name);  
		changeName(); 
	}; 

	if(redirect) {
		return <Navigate to="/" /> 
	}

	return (
		<div>
			<Box sx={{textAlign: 'center'}} mt={2}>   
				<Typography variant="h2"> 
					Login 
				</Typography>
			</Box>
			<Box mt={3} sx={{textAlign: 'center'}}>  
				<form onSubmit={loginSubmit}> 
					<Box>
						<TextField style={{width: '50%'}} type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />  
					</Box>
					<Box mt={1}>
						<TextField style={{width: "50%"}} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required /> 
					</Box>
					<Box mt={2}> 
						<Button type="submit" variant="contained">Sign in</Button> 
					</Box>
				</form>
			</Box>
		</div> 
	)
}


export default Loginpage; 