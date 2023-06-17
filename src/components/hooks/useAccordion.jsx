import { useState } from 'react';

const useAccordion = () => {
	const [expanded, setExpanded] = useState(false);
	const handleChange = (isExpanded, panel) => {
		setExpanded(isExpanded ? panel : false);
	};	

	return { expanded, handleChange };
};

export default useAccordion;
