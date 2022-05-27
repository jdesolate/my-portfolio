import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
	const location = useLocation();

	useEffect(() => {
		const div = document.querySelector('html');
		div?.scrollTo(0, 0);
	}, [location]);

	return (
		<footer className='footer'>
			<div className='footer-footcontent'>
				<div className='footer-footcontent-top'>
					<div className='footer-footcontent-top-left'>
						<Link to='/'>
							<img src='../../../assets/images/MJT Logo.png' alt='MJT Logo' />
						</Link>
					</div>
					<div className='footer-footcontent-top-right'>
						<a href='https://github.com/jdesolate' target='_blank'>
							<img src='../../../assets/images/Github.png' alt='My Github' />
						</a>
						<a href='https://twitter.com/TampusMervin' target='_blank'>
							<img src='../../../assets/images/Twitter.png' alt='My Twitter' />
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
					<p>Copyright © 2022 MJT. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
