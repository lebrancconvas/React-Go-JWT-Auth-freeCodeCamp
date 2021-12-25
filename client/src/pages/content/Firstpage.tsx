import React from 'react'; 
import { Typography } from '@mui/material';
import {Box} from '@mui/system'; 

const Firstpage = (props: {name: String}) => { 
	return (
		<div>
					<Box sx={{textAlign: 'center'}} mt={2}> 
						<Typography variant="h3"> 
							What do you want to do with Soomlek?   
						</Typography>
					</Box>
		</div>
	)
};

export default Firstpage; 