import React from 'react';
import '../main.scss';

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-container'>
					<div className='header-container-col1'>
						<h1 className='header-container-col1-text1'>Hey I'm</h1>
						<h1 className='header-container-col1-name'>Mervin John Tampus</h1>
						<h2 className='header-container-col1-text2'>
							Aspiring Software Engineer
						</h2>
						<h2 className='header-container-col1-text3'>
							UI/UX, Flutter, React JS, Firebase
						</h2>
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
