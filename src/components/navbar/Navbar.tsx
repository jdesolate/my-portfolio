import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-ulCont'>
				<ul>
					<li>
						<Link to='/'>
							<img src='../../assets/images/MJT Logo.png' alt='MJT Logo' />
						</Link>
					</li>
					<li>
						<Link to='/projects'>
							<a>Projects</a>
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<a>About</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
