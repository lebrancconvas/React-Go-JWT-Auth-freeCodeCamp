import React, {SyntheticEvent, useState} from 'react'; 
import {Navigate} from 'react-router-dom'; 
import {Typography, Button, TextField, Modal} from '@mui/material';
import {Box} from '@mui/system'; 
// import Navbar from '../components/Navbar'; 

const Loginpage = (props: {setName: (name: string) => void}) => { 
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [redirect, setRedirect] = useState(false);  
	// const [open, setOpen] = useState(false); 
	// const handleClose = () => setOpen(false); 
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
		
		if(content.message === "User not found.") {
			alert("User not found.");  
			window.location.reload(); 
		} else if(content.message === "Incorrect Password.") {   
			alert("Your password is incorrect or maybe you cannot login with this username because it's a duplicate username, Please try again the right password or register with new username.");    
			window.location.reload(); 
		} else {
			setRedirect(true);
			props.setName(content.name);  
		}
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
						<Button type="submit" variant="contained">Login</Button>  
					</Box>
				</form>
			</Box> 
		</div> 
	)
}


export default Loginpage; 