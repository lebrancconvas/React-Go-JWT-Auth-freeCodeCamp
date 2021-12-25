import React from 'react'; 
import { Typography } from '@mui/material';
import {Box} from '@mui/system'; 

const Firstpage = (props: {name: String}) => {
	return (
		<div>
					<Box sx={{textAlign: 'center'}} mt={2}> 
						<Typography variant="h3"> 
							{`Welcome ${props.name}`}  
						</Typography>
					</Box>
		</div>
	)
};

export default Firstpage; 