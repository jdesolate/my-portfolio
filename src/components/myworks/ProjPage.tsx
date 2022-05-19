import React from 'react';
import Navbar from './../navbar/Navbar';
import Footer from './../navbar/Footer';
import Projects from './Projects';

function ProjPage() {
	return (
		<div className='projPage'>
			<Navbar />
			<Projects />
			<Footer />
		</div>
	);
}

export default ProjPage;
