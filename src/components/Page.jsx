import React from 'react';
import {Container,Paper, Stack, Divider} from '@mui/material';
import {Description} from './Description';
import {Features} from './Features';
import {Demo} from './Demo';
import {Faqs} from './Faqs.jsx';
import {Contact} from './Contact.jsx';

export const Page = () => {
	
	return (
		<Container >
			<Paper elevation={5} >
				<Stack
					direction="column"
					divider={<Divider orientation="horizontal" variant='middle' />}
					useFlexGap
				>
					<Description/>
					<Features/>
					<Demo/>
					<Faqs/>
					<Contact/>
				</Stack>
			</Paper>
		</Container>
	);
};

