import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { projects } from '../Strings';
import viewButtons from '../viewButtons';
import Stack from './Stack';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './../../navbar/Footer';
import Navbar from './../../navbar/Navbar';
import { motion } from 'framer-motion';

export function Details(proj: string) {
	const location = useLocation();

	useEffect(() => {
		const div = document.querySelector('html');
		div?.scrollTo(0, 0);
	}, [location]);

	var data = projects[0];

	switch (proj) {
		case 'booksynation': {
			data = projects[0];
			break;
		}
		case 'recycler': {
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
		case 'altruwiz': {
			data = projects[4];
			break;
		}
		case 'tingbits': {
			data = projects[5];
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
							alt={data.image}
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
						className={`details-hero-${proj}`}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 1, duration: 1 }}
					></motion.div>
					<motion.div
						className={`details-hero-${proj}-sub`}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 0.65, duration: 1 }}
					></motion.div>
					<motion.div
						className={`details-hero-${proj}-sub2`}
						initial={{ opacity: 0, x: '50%', y: '-50%' }}
						animate={{ opacity: 0.35, x: 0, y: 0 }}
						transition={{ delay: 0.35, duration: 1 }}
					></motion.div>
					<div className='details-hero-frame'>
						<img src={`../../../../assets/images/${data.frame}`} alt='' />
					</div>
					<div className='details-hero-right'>
						<h3>My Role</h3>
						<p>{data.role}</p>
						<h3>Challenge</h3>
						<p>{data.challenge}</p>
						<div className='details-hero-right-stack'>
							{data.stack.map((path) => Stack(path))}
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
									data.viewButton.githubPath
							  )
							: null}
						{data.viewButton.gdoc
							? viewButtons(data.viewButton.gdocLink, data.viewButton.gdocPath)
							: null}
						{data.viewButton.yt
							? viewButtons(data.viewButton.ytLink, data.viewButton.ytPath)
							: null}
						{data.viewButton.pdf
							? viewButtons(data.viewButton.pdfLink, data.viewButton.pdfPath)
							: null}
						{data.viewButton.app
							? viewButtons(data.viewButton.appLink, data.viewButton.appPath)
							: null}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
