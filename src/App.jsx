/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {Navbar} from './components/Navbar.jsx';
import {Page} from './components/Page.jsx';
import {Stack} from '@mui/material';

function App() {

	return (
		<>
			<Stack spacing={2} useFlexGap>
				<Navbar/>
				<Page/>
			</Stack>
		</>
	);
}

export default App;
