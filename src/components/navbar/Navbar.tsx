import { Link } from 'react-router-dom';

function Navbar() {
	const handleClick = () => {
		setTimeout(() => {
			const div = document.querySelector('#contact-me');
			div?.scrollIntoView({ behavior: 'smooth' });
		}, 500);
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
					<Link to='/about'>
						<a onClick={handleClick}>Contact Me</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
