import React, {useState} from 'react'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material';  
import {Box} from '@mui/system'; 
import {Navigate, useNavigate} from 'react-router-dom'; 

const Navbar = (props: {name: string, setName: (name: string) => void}) => { 
	// const [redirect, setRedirect] = useState(false); 
	const navigate = useNavigate(); 
	const toHome = () => navigate('/'); 
	const toRegister = () => navigate('/register'); 
	const toLogin = () => navigate('/login');  
	const toProfile = () => navigate('/profile');  
	let menu; 

	const logout = async() => {
		await fetch('http://localhost:3002/api/logout', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include' 
		})
		
		props.setName('');  
		// setRedirect(true); 
	}; 

	// if(redirect) {
	// 	return <Navigate to="/" /> 
	// }

	if(props.name === '' || props.name === undefined) {   
		menu = (
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={toHome} style={{cursor: 'pointer'}}>   
							Soomlek 
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
		);
	} else {
		menu = (
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={toHome} style={{cursor: 'pointer'}}>   
							Soomlek  
						</Typography>
						<Button color="inherit" onClick={toProfile}> 
							{props.name}  
						</Button>
						<Button color="inherit" onClick={logout}>    
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}

	return (
		<div>
			{menu}
		</div>
	)
}

export default Navbar; 