import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import productData from './utils/data.json';

export const Features = () => {
	return (
		<Container id="features">
			<Grid container spacing={2} sx={{ mt: 5, mb: 5, justifyContent: 'center' }}>
				<Grid item xs={12} sx={{ mb: 5, display: 'flex', justifyContent: 'left' }}>
					<Typography variant="h4" fontWeight="bold" gutterBottom>
            🚀 Features
					</Typography>
				</Grid>
				{productData.features.map((feature, index) => (
					<Grid container key={index} sx={{ mb: 5 }}>
						<Grid item md={6} xs={12} sx={{ mb: 5, display: 'flex', justifyContent: 'center' }}>
							<img
								id={`feature-image-${index + 1}`}
								src={feature.imageURL}
								width="80%"
								alt={`feature-image-${index + 1}`}
								aria-label={`Image portraying ${feature.title}`}
							/>
						</Grid>
						<Grid item md={6} xs={12} sx={{ justifyContent: 'center' }}>
							<Typography variant="h5" fontWeight="bold" gutterBottom>
								{feature.title}
							</Typography>
							<Typography variant="h6" gutterBottom>
								{feature.description}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
