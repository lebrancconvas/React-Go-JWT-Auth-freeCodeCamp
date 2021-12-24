import React from 'react'; 
import {Typography, AppBar, Toolbar, Button} from '@mui/material';  
import {Box} from '@mui/system'; 

const Landingpage = () => {
	return (
		<div>
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static"> 
					<Toolbar>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}}> 
							React-Go-Auth 
						</Typography>
						<Button color="inherit"> 
							Register 
						</Button>
						<Button color="inherit">
							Login 
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}

export default Landingpage;;