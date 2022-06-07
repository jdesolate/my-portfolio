import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './components/Error';
import { Details } from './components/myworks/details/Details';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:projectName' element={<Details />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
