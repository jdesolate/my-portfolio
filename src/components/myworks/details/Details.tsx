import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import viewButtons from '../viewButtons';
import Stack from './Stack';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from './../../navbar/Footer';
import Navbar from './../../navbar/Navbar';
import { motion } from 'framer-motion';
import { projects } from '../Strings';

export function Details() {
	const location = useLocation();
	let { projectName } = useParams();

	useEffect(() => {
		const div = document.querySelector('html');
		div?.scrollTo(0, 0);
	}, [location]);

	var data = projects[0];

	switch (projectName) {
		case 'booksynation': {
			data = projects[0];
			break;
		}
		case 'recycl3r': {
			data = projects[1];
			break;
		}
		case 'whitelist': {
			data = projects[2];
			break;
		}
		case 'datagrades': {
			data = projects[3];
			break;
		}
		case 'inteletraf': {
			data = projects[4];
			break;
		}
		case 'altruwiz': {
			data = projects[5];
			break;
		}
		case 'tingbits': {
			data = projects[6];
			break;
		}
	}
	return (
		<>
			<Navbar />
			<div className='details'>
				<div className='details-header'>
					<div className='details-header-head'>
						<img
							src={`../../../../assets/images/${data.image}`}
							alt={data.imageAlt}
						/>
						<div className='details-header-head-title'>
							<h2>{data.title}</h2>
							<h3>{data.subtitle}</h3>
							<h4>{data.date}</h4>
						</div>
					</div>
					<div className='details-header-body'>
						<p>{data.desc}</p>
					</div>
				</div>

				<div className='details-hero'>
					<div className='details-hero-bg' />
					<motion.div
						className={`details-hero-circle1 ${projectName}`}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 1, duration: 1 }}
					></motion.div>
					<motion.div
						className={`details-hero-circle2 ${projectName}`}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 0.65, duration: 1 }}
					></motion.div>
					<motion.div
						className={`details-hero-circle3 ${projectName} `}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 0.35, duration: 1 }}
					></motion.div>
					<div className='details-hero-frame'>
						<img
							src={`../../../../assets/images/${data.frame}`}
							alt={`${data.frameAlt}`}
						/>
					</div>
					<div className='details-hero-right'>
						<h3>My Role</h3>
						<p>{data.role}</p>
						<h3>Challenge</h3>
						<p>{data.challenge}</p>
						<div className='details-hero-right-stack'>
							{data.stack.map((path, key) => Stack(path, key))}
						</div>
					</div>
				</div>
				<div className='details-botSection'>
					<h3>Solution</h3>
					<p>{data.solution}</p>
					<h3>Reflection</h3>
					<p>{data.reflection}</p>
					<div className='details-botSection-buttons'>
						<Button endIcon={<ArrowForwardOutlinedIcon />} disableRipple={true}>
							View on
						</Button>
						{data.viewButton.github
							? viewButtons(
									data.viewButton.githubLink,
									data.viewButton.githubPath,
									'Github Logo'
							  )
							: null}
						{data.viewButton.gdoc
							? viewButtons(
									data.viewButton.gdocLink,
									data.viewButton.gdocPath,
									'Google Docs Logo'
							  )
							: null}
						{data.viewButton.yt
							? viewButtons(
									data.viewButton.ytLink,
									data.viewButton.ytPath,
									'Youtube Logo'
							  )
							: null}
						{data.viewButton.pdf
							? viewButtons(
									data.viewButton.pdfLink,
									data.viewButton.pdfPath,
									'PDF icon'
							  )
							: null}
						{data.viewButton.app
							? viewButtons(
									data.viewButton.appLink,
									data.viewButton.appPath,
									'Project application logo'
							  )
							: null}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
