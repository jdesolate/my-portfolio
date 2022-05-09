import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Projects from './components/myworks/Projects';
import Navbar from './components/navbar/Navbar';
import Techstack from './components/techstack/Techstack';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<Header />
		<Techstack />
		<Projects />
	</React.StrictMode>
);
