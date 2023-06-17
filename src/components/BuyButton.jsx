import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useRotation } from './hooks/useRotation';
import { buyButtonAnimation } from './utils/buyButtonAnimation';
import { getLink  } from './utils/getLink';
import { useEffect, useState } from 'react';


export const BuyButton = () => {
	
	const shouldRotate = useRotation();
	const buyButtonSx = buyButtonAnimation(shouldRotate);

	const [link, setLink] = useState('');

	useEffect(() => {
		const fetchLink = async () => {
			const generatedLink = await getLink();
			setLink(generatedLink);
		};
		fetchLink();
	}, []);

	return (
		<Container>
			<Grid container sx={{mt: 5,mb:5,display: 'flex', justifyContent: 'center', width: '100%'}}>
				<Grid item lg={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
					<Button variant="contained" sx={buyButtonSx} color="error" href={link}>
        👉 Get Now
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};
