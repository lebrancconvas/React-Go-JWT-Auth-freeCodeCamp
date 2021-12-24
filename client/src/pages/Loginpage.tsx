import React from 'react'; 
import {Typography, Button, TextField} from '@mui/material';
import {Box} from '@mui/system'; 
import Navbar from '../components/Navbar'; 

const Loginpage = () => {
	return (
		<div>
			<Box>
				<Navbar /> 
			</Box>
			<Box sx={{textAlign: 'center'}} mt={2}>   
				<Typography variant="h2"> 
					Login 
				</Typography>
			</Box>
			<Box mt={3} sx={{textAlign: 'center'}}>  
				<form action="">
					<Box>
						<TextField style={{width: '50%'}} type="text" placeholder="Username" required />  
					</Box>
					<Box mt={1}>
						<TextField style={{width: "50%"}} type="password" placeholder="Password" required /> 
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