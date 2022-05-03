import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<Header />
	</React.StrictMode>
);
