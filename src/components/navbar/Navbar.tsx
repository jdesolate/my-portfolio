import { Link } from 'react-router-dom';

function Navbar() {
	const handleClick = () => {
		const div = document.querySelector('#contact-me');
		div?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link to='/'>
						<img src='../../assets/images/MJT Logo.png' alt='MJT Logo' />
					</Link>
				</li>
				<li className='navbar-item'>
					<Link to='/projects'>
						<a>Portfolio</a>
					</Link>
				</li>
				<li className='navbar-item'>
					<a onClick={handleClick}>Contact Me</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
