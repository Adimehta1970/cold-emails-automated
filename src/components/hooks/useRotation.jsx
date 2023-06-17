import { useState, useEffect } from 'react';

export const useRotation = () => {
	const [shouldRotate, setShouldRotate] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShouldRotate(false);
			setTimeout(() => {
				setShouldRotate(true);
			}, 2000);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return shouldRotate;
};
