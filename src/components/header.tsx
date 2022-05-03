import React from 'react';
import '../main.scss';

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-container'>
					<div className='header-container-col1'>
						<h1>Hey I'm</h1>
						<h1 className='header-container-col1-name'>Mervin John Tampus</h1>
						<h3>Aspiring Software Engineer</h3>
						<h4>UI/UX, Flutter, React JS, Firebase</h4>
						<button>My Works</button>
					</div>
					<div className='header-container-col2'>
						<img src='../../assets/images/mjtprofile.png' alt='' />
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
