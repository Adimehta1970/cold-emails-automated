import React from 'react';
import {Container,  Typography, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from './utils/data.json';
import useAccordion from './hooks/useAccordion';


export const Faqs = () => {

	const { expanded, handleChange } = useAccordion();
	const { faqs } = data;

	return (
		<Container id="faqs">
			<Grid container spacing={2} sx={{ mt: 5, mb: 5, justifyContent: 'center' }}>
				<Grid item xs={12} sx={{ mb: 5, display: 'flex', justifyContent: 'left' }}>
					<Typography variant="h4" fontWeight="bold" gutterBottom>
            🙋‍♀️ FAQs
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{faqs.map((faq, index) => (
						<Accordion
							key={index}
							expanded={expanded === `panel-${index}`}
							onChange={(event, isExpanded) => handleChange(isExpanded, `panel-${index}`)}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`} id={`faq-${index}-header`}>
								<Typography variant="h6">{index + 1}. {faq.question}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body1">{faq.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Grid>
			</Grid>
		</Container>
	);
};

