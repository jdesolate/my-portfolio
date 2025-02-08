import { useNavigate } from 'react-router-dom';
import { MJTLogo } from '../../constants/ImageSources';

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
						src={MJTLogo}
						alt='MJT Logo'
						onClick={() => handleClick('#main')}
					/>
				</li>

				<li className='navbar-item'>
					<a onClick={() => handleClick('#proj')}>Projects</a>
				</li>
				<li className='navbar-item'>
					<a onClick={() => handleClick('#contact-me')}>Contact Me</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
