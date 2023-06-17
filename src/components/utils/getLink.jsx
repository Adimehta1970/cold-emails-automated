import { getUserCountryCode } from './getUserCountry';

export const getLink = async () => {
	const countryCode = await getUserCountryCode();
	let link = '';

	if (countryCode === 'IN') {
		link = 'https://www.youtube.com';
	} else {
		link = 'https://chat.openai.com/';
	}

	return link;
};
