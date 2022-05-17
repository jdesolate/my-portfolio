import { Link } from 'react-router-dom';

function Footer() {
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
							<img src='../../../assets/images/Github.png' alt='Github' />
						</a>
						<a href='https://twitter.com/TampusMervin' target='_blank'>
							<img src='../../../assets/images/Twitter.png' alt='Twitter' />
						</a>
						<a href='https://www.facebook.com/tampus.mervin' target='_blank'>
							<img src='../../../assets/images/Facebook.png' alt='Facebook' />
						</a>

						<a
							href='https://www.linkedin.com/in/mervin-john-tampus-6b1bb3206/'
							target='_blank'
						>
							<img src='../../../assets/images/Linkedin.png' alt='LinkedIn' />
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
