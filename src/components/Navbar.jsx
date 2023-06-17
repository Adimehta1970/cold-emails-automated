import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Container} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '/cold-emails-automated.ico';


export const Navbar = () => {

	const isMobile = useMediaQuery('(max-width:1400px)');
	const maxWidth = isMobile ? false: 'xl';
	
	return (
		<AppBar position="static" elevation={0} color="transparent">
			{maxWidth ? (
				<Container maxWidth="xl">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<img src={Logo} height={50} width={50}/>
						</IconButton>
						<Typography variant="h6" color="inherit" component="div">
					Cold Emails Automated
						</Typography>
					</Toolbar>
				</Container>) : ( 
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<img src={Logo} height={50} width={50}/>
					</IconButton>
					<Typography variant="h6" color="inherit" component="div">
					Cold Emails Automated
					</Typography>
				</Toolbar>)}
		</AppBar>
	);
};
