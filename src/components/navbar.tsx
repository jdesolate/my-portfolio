import React from 'react';
import '../main.scss';

function Navbar() {
	return (
		<>
			<div className='navbar'>
				<ul>
					<li>
						<a href='#'>
							<img src='../../assets/images/MJT Logo.png' alt='MJT Logo' />
						</a>
					</li>
					<li>
						<a href='#'>Projects</a>
					</li>
					<li>
						<a href='#'>About Me</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
