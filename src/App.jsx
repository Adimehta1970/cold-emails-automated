/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import {Navbar} from './components/Navbar.jsx';
import {Page} from './components/Page.jsx';
import {Stack} from '@mui/material';

function App() {
	useEffect(() => {
		document.body.style.margin = '0'; // Apply the CSS rule to remove the body margin
	}, []);

	return (
		<div style={{backgroundColor: '#3f3f3f'}}>
			<Stack spacing={2} useFlexGap>
				<Navbar/>
				<Page/>
			</Stack>
		</div>
	);
}

export default App;
