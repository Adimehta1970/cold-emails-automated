import { keyframes } from '@mui/system';

export const buyButtonAnimation = (shouldRotate) => {
	const rotateAnimation = keyframes`
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  `;

	const getAnimation = () => {
		if (shouldRotate) {
			return `${rotateAnimation}`;
		}
		return 'none';
	};

	const buySx = {
		borderRadius: 2,
		typography: 'h6',
		fontWeight: 'bold',
		px: '20px',
		py: '10px',
		animation: `${getAnimation()} .5s infinite linear`,
		'&:hover': { animation: 'none', transform: 'scale(1.4)' },
	};

	return buySx;
};
