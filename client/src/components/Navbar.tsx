import React from 'react'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material';  
import {Box} from '@mui/system'; 
import {useNavigate} from 'react-router-dom'; 

const Navbar = (props: {name: string, setName: (name: string) => void}) => { 
	const navigate = useNavigate(); 
	const toHome = () => navigate('/'); 
	const toRegister = () => navigate('/register'); 
	const toLogin = () => navigate('/login');  
	let menu; 

	const logout = async() => {
		await fetch('http://localhost:3002/api/logout', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include' 
		})
		

		props.setName('');  
	}; 


	if(props.name === '' || props.name === undefined) {   
		menu = (
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={toHome}>  
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
		);
	} else {
		menu = (
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={toHome}>  
							React-Go-Auth 
						</Typography>
						<Button color="inherit" onClick={logout}>    
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}

	console.log(`Name from Navbar : ${props.name}`); 

	return (
		<div>
			{menu}
		</div>
	)
}

export default Navbar; 