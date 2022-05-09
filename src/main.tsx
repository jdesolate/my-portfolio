import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Techstack from './components/techstack/Techstack';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<Header />
		<Techstack />
	</React.StrictMode>
);
