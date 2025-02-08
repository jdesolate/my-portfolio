import { useNavigate } from 'react-router-dom';

function Footer() {
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

	return (
		<footer className='footer'>
			<div className='footer-footcontent'>
				<div className='footer-footcontent-top'>
					<div className='footer-footcontent-top-left'>
						<img
							src='../../../assets/images/MJT Logo.png'
							alt='MJT Logo'
							onClick={() => handleClick('#main')}
						/>
					</div>
					<div className='footer-footcontent-top-right'>
						<a href='https://github.com/jdesolate' target='_blank'>
							<img src='../../../assets/images/Github.png' alt='My Github' />
						</a>
						<a href='https://x.com/mj_tampus' target='_blank'>
							<img src='../../../assets/images/X logo.png' alt='My X' />
						</a>
						<a href='https://www.facebook.com/tampus.mervin' target='_blank'>
							<img
								src='../../../assets/images/Facebook.png'
								alt='My Facebook'
							/>
						</a>

						<a
							href='https://www.linkedin.com/in/mervin-john-tampus-6b1bb3206/'
							target='_blank'
						>
							<img
								src='../../../assets/images/Linkedin.png'
								alt='My LinkedIn'
							/>
						</a>
					</div>
				</div>
				<div className='footer-footcontent-bot'>
					<p>© 2022 MJT Portfolio</p>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
