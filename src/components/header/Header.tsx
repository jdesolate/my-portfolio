import '../../main.scss';

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-container'>
					<div className='header-container-col1'>
						<div className='header-container-col1-textcont'>
							<h1 className='header-container-col1-textcont-text1'>
								Hey I'm{' '}
								<span className='header-container-col1-textcont-text1-1'>
									Mervin John{' '}
									<span className='header-container-col1-textcont-text1-2'>
										Tampus
									</span>
								</span>
							</h1>

							<h2 className='header-container-col1-textcont-text2'>
								I make UI/UX Design, Web{' '}
								<span className='header-container-col1-textcont-text1-3'>
									& Mobile applications
								</span>
							</h2>
						</div>
						<div className='header-container-col1-row'>
							<button className='header-container-col1-row-button1'>
								My Works
							</button>
							<button className='header-container-col1-row-button2'>
								Contact Me
							</button>
						</div>
					</div>
					<div className='header-container-circle'></div>
					<div className='header-container-comet'></div>
				</div>
			</div>
		</>
	);
}

export default Header;
