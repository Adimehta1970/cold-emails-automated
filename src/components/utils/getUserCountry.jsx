import axios from 'axios';

export const getUserCountryCode = async () => {
	try {
		const response = await axios.get('https://api.geoiplookup.net/?json=true');
		if (response.status === 200) {
			const data = response.data;
			const countryCode = data.countrycode;
			return countryCode;
		} else {
			console.log('Error:', response.status);
			// Set default country code as "US"
			const defaultCountryCode = 'US';
			return defaultCountryCode;
		}
	} catch (error) {
		console.log('Error:', error.message);
		// Set default country code as "US"
		const defaultCountryCode = 'US';
		return defaultCountryCode;
	}
};
