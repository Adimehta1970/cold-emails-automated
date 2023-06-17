import { useState, useEffect } from 'react';

export const useLoading = (elementId) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const element = document.getElementById(elementId);

		const handleLoad = () => {
			setLoading(false);
		};

		if (element) {
			element.addEventListener('load', handleLoad);
		}

		return () => {
			if (element) {
				element.removeEventListener('load', handleLoad);
			}
		};
	}, [elementId]);

	return loading;
};

