import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const location = useLocation();
	const handleClick = (id: string) => {
		setTimeout(() => {
			const div = document.querySelector(id);
			div?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}, 200);
	};
	//set loading screen
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link to='/'>
						<img src='../../assets/images/MJT Logo.png' alt='MJT Logo' />
					</Link>
				</li>

				<li className='navbar-item'>
					{location.pathname != '/' ? (
						<Link to='/'>
							<a onClick={() => handleClick('#proj')}>Portfolio</a>
						</Link>
					) : (
						<a onClick={() => handleClick('#proj')}>Portfolio</a>
					)}
				</li>
				<li className='navbar-item'>
					{location.pathname != '/' ? (
						<Link to='/'>
							<a onClick={() => handleClick('#contact-me')}>Contact Me</a>
						</Link>
					) : (
						<a onClick={() => handleClick('#contact-me')}>Contact Me</a>
					)}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
