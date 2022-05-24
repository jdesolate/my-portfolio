import { Link } from 'react-router-dom';

function Navbar() {
	const handleClick = (id: string) => {
		setTimeout(() => {
			const div = document.querySelector(id);
			div?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}, 100);
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
					{/* <Link to='/'> */}
					<a onClick={() => handleClick('#proj')}>Portfolio</a>
					{/* </Link> */}
				</li>
				<li className='navbar-item'>
					{/* <Link to='/'> */}
					<a onClick={() => handleClick('#contact-me')}>Contact Me</a>
					{/* </Link> */}
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
