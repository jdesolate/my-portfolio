import { Link } from 'react-router-dom';
import '../../main.scss';

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-bg' />
				<div className='header-container'>
					<div className='header-container-circle'></div>
					<div className='header-container-comet'></div>
					<div className='header-container-col1'>
						<div className='header-container-col1-top'>
							<div className='header-container-col1-top-textcont'>
								<div className='header-container-col1-top-textcont-text1-intro'>
									<h1>Hey I'm </h1>
								</div>
								<div className='header-container-col1-top-textcont-text1-name'>
									<h1 className='header-container-col1-top-textcont-text1-name-1'>
										Mervin John{' '}
										<span className='header-container-col1-top-textcont-text1-name-2'>
											Tampus
										</span>
									</h1>
								</div>
							</div>
							<div className='header-container-col1-top-textcont2'>
								<p className='header-container-col1-top-textcont2-text2'>
									I make UI/UX Design, Web{' '}
									<span className='header-container-col1-top-textcont2-text2-3'>
										& Mobile applications
									</span>
								</p>
							</div>
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

							<button className='header-container-col1-row-button2'>
								<Link to='/about'>Contact Me</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
