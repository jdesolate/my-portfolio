import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();
	const handleClick = (id: string) => {
		navigate('/');
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
					<img
						src='../../assets/images/MJT Logo.png'
						alt='MJT Logo'
						onClick={() => handleClick('#main')}
					/>
				</li>

				<li className='navbar-item'>
					<a onClick={() => handleClick('#proj')}>Portfolio</a>
				</li>
				<li className='navbar-item'>
					<a onClick={() => handleClick('#contact-me')}>Contact Me</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
