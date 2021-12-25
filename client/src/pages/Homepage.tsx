import React from 'react';   
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
// import Navbar from '../components/Navbar'; 
import {useNavigate} from 'react-router-dom'; 
import Firstpage from './content/Firstpage'; 

const Homepage = (props: {name: string}) => {
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register');  
	const toLogin = () => navigate('/login'); 
	let home; 
	
	if(props.name) {
		home = (
			<Firstpage name={props.name} /> 
		); 
	} else {
		home = (
			<div>
				<Box sx={{textAlign: 'center'}} mt={2}> 
					<Typography variant="h3"> 
						Soomlek Mathematics Quiz  
					</Typography>
				</Box>
				<Box sx={{textAlign: 'center'}} mt={2}> 
					<Button variant="contained" onClick={toRegister}>Get Started</Button> 
					<Button variant="contained" onClick={toLogin} sx={{marginLeft: 2}}>Login</Button>   
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