import React from 'react';
import { Container, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { BuyButton } from './BuyButton.jsx';
import { useLoading } from './hooks/useLoading.jsx';
import data from './utils/data.json';


export const Demo = () => {

	const loading = useLoading('demo-video');
	const demoVideoUrl = data.demoVideoUrl;

	return (
		<Container id="demo">
			<Grid container spacing={2} sx={{ mt: 5, mb: 5, display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
					<Typography variant="h4" fontWeight="bold" gutterBottom>
            📺 Demo
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						mt: 5,
						mb: 5,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						position: 'relative',
						paddingTop: '56.25%',
					}}
				>
					{loading ? (
						<Skeleton variant="rectangular" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} animation="wave" />
					) : null}
					<iframe
						id="demo-video"
						src={demoVideoUrl}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						style={{border:'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
						aria-label="demo-video"
					/>
				</Grid>
				<Grid item lg={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
					<BuyButton />
				</Grid>
			</Grid>
		</Container>
	);
};