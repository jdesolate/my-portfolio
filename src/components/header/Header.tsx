import { Link } from 'react-router-dom';
import '../../main.scss';

function Header() {
	const handleClick = () => {
		setTimeout(() => {
			const div = document.querySelector('#contact-me');
			div?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 500);
	};
	return (
		<>
			<header className='header'>
				<div className='header-container'>
					<div className='header-container-back'>
						<div className='header-container-back-circle'></div>
						<div className='header-container-back-circle2'></div>
						<div className='header-container-back-circle3'></div>
					</div>
					<div className='header-container-col1'>
						<div className='header-container-col1-top'>
							<div className='header-container-col1-top-textcont'>
								<p>Hey I'm</p>
								<div className='header-container-col1-top-textcont-text1-name'>
									<h1 className='header-container-col1-top-textcont-text1-name-1'>
										Mervin John{' '}
										<span className='header-container-col1-top-textcont-text1-name-2'>
											Tampus
										</span>
									</h1>
								</div>
							</div>
							<p>I make UI/UX Design, Web & Mobile applications</p>
						</div>
						<div className='header-container-col1-row'>
							<button
								className='header-container-col1-row-button1'
								onClick={() =>
									document
										.getElementById('proj')
										?.scrollIntoView({ behavior: 'smooth' })
								}
							>
								My Works
							</button>
							<Link to='/about' onClick={handleClick}>
								<button className='header-container-col1-row-button2'>
									About Me
								</button>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
