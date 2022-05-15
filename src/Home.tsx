import Header from './components/header/Header';
import Projects from './components/myworks/Projects';
import Navbar from './components/navbar/Navbar';
import Techstack from './components/techstack/Techstack';

function Home() {
	return (
		<div className='main'>
			<Header />
			<Techstack />
			<Projects />
		</div>
	);
}

export default Home;
