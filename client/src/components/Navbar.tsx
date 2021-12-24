import React from 'react'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material';  
import {Box} from '@mui/system'; 
import {useNavigate} from 'react-router-dom'; 

const Navbar = () => {
	const navigate = useNavigate(); 
	const toRegister = () => navigate('/register'); 
	const toLogin = () => navigate('/login');  
	return (
		<div>
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}}> 
							React-Go-Auth 
						</Typography>
						<Button color="inherit" onClick={toRegister}>  
							Register 
						</Button>
						<Button color="inherit" onClick={toLogin}> 
							Login 
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}

export default Navbar; 