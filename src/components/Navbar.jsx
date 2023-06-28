import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Container} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import data from './utils/data.json';


export const Navbar = () => {

	const isMobile = useMediaQuery('(max-width:1400px)');
	const maxWidth = isMobile ? false: 'xl';
	
	return (
		<AppBar position="static" elevation={0} color="transparent">
			{maxWidth ? (
				<Container maxWidth="xl">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<img src={data.logo} height={50} width={50}/>
						</IconButton>
						<Typography component="div" sx={{ fontFamily: 'Poppins' }}>
							<center>
								<strong>
									<span style={{ color: '#888dd1', fontSize: '1.4em' }}>EMAILS</span>
								</strong>
							</center>
							<span style={{ color: 'white' }}>A U T O M A T E D</span>
						</Typography>
					</Toolbar>
				</Container>) : ( 
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<img src={data.logo} height={50} width={50}/>
					</IconButton>
					<Typography component="div" sx={{ fontFamily: 'Poppins' }}>
						<center>
							<strong>
								<span style={{ color: '#888dd1', fontSize: '1.4em' }}>EMAILS</span>
							</strong>
						</center>
						<span style={{ color: 'white' }}>A U T O M A T E D</span>
					</Typography>
				</Toolbar>)}
		</AppBar>
	);
};
