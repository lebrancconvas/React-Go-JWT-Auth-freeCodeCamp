import React from 'react'; 
import {Navigate, useNavigate} from 'react-router-dom'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const Profile = (props: {name: string}) => {
	let contentProfile; 
	const navigator = useNavigate(); 
	const toLogin = () => navigator('/login');  
	if(props.name) {
		contentProfile = (
			<div>
				<Box mt={2} sx={{textAlign: 'center'}}> 
					<Typography variant="h3"> 
						User Profile  
					</Typography>
				</Box>
				<Box mt={3} sx={{textAlign: 'center'}}> 
					<Typography variant="h5"> 
						Hello I'm {props.name} 
					</Typography>
				</Box>
			</div>
		)
	} else {
		contentProfile = ( 
			<Box mt={2} sx={{textAlign: 'center'}}>  
				<Typography variant="h3">
					Please Login before 
					<Box mt={2}> 
						<Button variant="contained" onClick={toLogin}> 
							Login 
						</Button>
					</Box>
				</Typography>
			</Box> 
		)
	};

	console.log(props.name); 

	return (
		<div>
			{contentProfile}  	
		</div> 
	)
}

export default Profile;  