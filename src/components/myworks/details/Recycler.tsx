import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { projects } from '../Strings';
import viewButtons from '../viewButtons';
import Stack from './Stack';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Recycler() {
	const data = projects[1];

	const location = useLocation();

	useEffect(() => {
		const div = document.querySelector('html');
		div?.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<div className='details'>
				<div className='details-bg-recycler' />
				<div className='details-header'>
					<div className='details-header-head'>
						<img src={`../../../../assets/images/${data.image}`} alt='' />
						<div className='details-header-head-title'>
							<h1>{data.title}</h1>
							<h3>{data.subtitle}</h3>
							<h4>{data.date}</h4>
						</div>
					</div>
					<div className='details-header-body'>
						<p>{data.desc}</p>
					</div>
				</div>
				<div className='details-hero'>
					<div className='details-hero-circle'></div>
					<div className='details-hero-frame'>
						<img src={`../../../../assets/images/${data.frame}`} alt='' />
					</div>
					<div className='details-hero-right'>
						<h2>My Role</h2>
						<p>{data.role}</p>
						<div className='details-hero-right-divider'></div>
						<h2>Challenge</h2>
						<p>{data.challenge}</p>
						<div className='details-hero-right-divider'></div>
						<div className='details-hero-right-stack'>
							{data.stack.map((path) => Stack(path))}
						</div>
					</div>
				</div>
				<div className='details-botSection'>
					<div className='details-botSection-comet'></div>
					<h2>Solution</h2>
					<p>{data.solution}</p>
					<h2>Reflection</h2>
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
					</div>
				</div>
			</div>
		</>
	);
}

export default Recycler;
