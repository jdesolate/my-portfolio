import React from 'react';
import Header from './components/header/Header';
import Projects from './components/myworks/Projects';
import Navbar from './components/navbar/Navbar';
import Techstack from './components/techstack/Techstack';

function App() {
	return (
		<div className='main'>
			<Navbar />
			<Header />
			<Techstack />
			<Projects />
		</div>
	);
}

export default App;
