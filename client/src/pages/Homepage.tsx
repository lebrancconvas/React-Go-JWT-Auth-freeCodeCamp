import React from 'react';   
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
// import Navbar from '../components/Navbar'; 
import {useNavigate} from 'react-router-dom'; 

const Homepage = (props: {name: string}) => {
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register');  
	const toLogin = () => navigate('/login'); 
	let home; 
	
	if(props.name) {
		home = (
			<div>
				<Box sx={{textAlign: 'center'}} mt={2}> 
					<Typography variant="h3"> 
						{`Welcome ${props.name}`}  
					</Typography>
				</Box>
			</div>
		); 
	} else {
		home = (
			<div>
				<Box sx={{textAlign: 'center'}} mt={2}> 
					<Typography variant="h3"> 
						You are not logged in. 
					</Typography>
				</Box>
				<Box sx={{textAlign: 'center'}}>
					<Button variant="contained" onClick={toRegister}>Register</Button> 
					<Button variant="contained" onClick={toLogin}>Login</Button>  
				</Box>
			</div>
		)
	}

	return (
		<div>
			{home}
		</div>
	)
}

export default Homepage; 