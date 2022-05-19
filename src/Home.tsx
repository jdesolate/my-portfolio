import Header from './components/header/Header';
import Projects from './components/myworks/Projects';
import Footer from './components/navbar/Footer';
import Navbar from './components/navbar/Navbar';
import Techstack from './components/techstack/Techstack';

function Home() {
	return (
		<>
			<Navbar />
			<div className='main'>
				<Header />
				<Techstack />
				<Projects />
			</div>
			<Footer />
		</>
	);
}

export default Home;
