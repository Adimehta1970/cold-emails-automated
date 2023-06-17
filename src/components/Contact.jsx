/* eslint-disable no-unused-vars */
import React from 'react';
import {Container,  TextField, Typography, Box, Button} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';


export const Contact = () => {

	return (
		<Container id="contact-us">
			<Grid container spacing={2} sx={{ mt: 5, mb: 5, display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Typography variant="h4" fontWeight="bold" gutterBottom>📫 Have a question? Ask us right away!</Typography>
				</Grid>	
				<Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
					<form action="https://formsubmit.co/coldemailsautomated@gmail.com" method="POST">
						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_next" value="https://youtube.com"></input>
						<Grid container spacing={2} >
							<Grid item xs={12} >
								<TextField id="name" label="Name" variant="outlined" type="text" fullWidth required/>
							</Grid>	
							<Grid item xs={12}>
								<TextField id="email" label="Email" variant="outlined" type="email" fullWidth required/>
							</Grid>	
							<Grid item xs={12}>
								<TextField id="message" label="Message" variant="outlined" type="text" fullWidth multiline rows={4} required/>
							</Grid>	
							<Grid item xs={12}>
								<Button type="submit" variant="contained" color="primary" fullWidth>
								Send &nbsp; <EmailIcon/>
								</Button>
							</Grid>	
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};
