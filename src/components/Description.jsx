import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { BuyButton } from './BuyButton.jsx';
import data from './utils/data.json';


export const Description = () => {
	
	const { text, imageURL, keyPoints } = data.description;
	const { withTick, withoutTick } = keyPoints;

	return (
		<Container id="main">
			<Grid container spacing={2} sx={{ mt: 5, mb: 5, display: 'flex', justifyContent: 'center', width: '100%' }}>
				<Grid item lg={12} sx={{ mb: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
					<Typography variant="h4" fontWeight="bold" gutterBottom>
						{data.title}
					</Typography>
				</Grid>

				<Grid item lg={6} md={6} sm={12} xs={12} sx={{ justifyContent: 'center', width: '100%' }}>
					<Typography variant="h5" gutterBottom>
						{text}
					</Typography>
					<List sx={{ width: '100%' }}>
						{withTick.map((value) => (
							<ListItem key={value}>
								<ListItemIcon><DoneRoundedIcon sx={{background: 'green', color: 'white'}}/></ListItemIcon>
								<ListItemText primary={`${value}`} />
							</ListItem>
						))}
						<ListItem>
							<ListItemText primary={withoutTick[0]} />
						</ListItem>
					</List>
				</Grid>

				<Grid item lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
					<img src={imageURL} alt="Product Image" width={'100%'} />
				</Grid>
				<Grid item lg={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
					<BuyButton />
				</Grid>
			</Grid>
		</Container>
	);
};
