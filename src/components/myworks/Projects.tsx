import Button from '@mui/material/Button';
import '../../main.scss';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { projects } from './Strings';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

function Projects() {
	const navigate = useNavigate();
	const [projRoute, setProjRoute] = useState('');
	// const handleOnClick = useCallback(
	// 	() => navigate({`/${projRoute}`}, { replace: true }),
	// 	[navigate]
	// );
	return (
		<div className='projects' id='proj'>
			<>
				<div className='projects-comet'></div>
				<div className='projects-header'>
					<div className='projects-header-title'>
						<h1>Projects</h1>
					</div>
					<p>
						Most of these projects are made together with a team. I worked in a
						variety of roles such as front-end developer, back-end developer,
						UI/UX Designer.
					</p>
				</div>
				{projects.map((data) => (
					<div className='projects-card'>
						<div
							className='projects-card-col1'
							onClick={() => {
								navigate(`/${data.route}`);
							}}
						>
							<img
								className='projects-card-col1-frame'
								src={`../../../../assets/images/${data.frame}`}
								alt={`${data.title} Frame`}
							/>
							<div className='projects-card-col1-overlay'></div>
							<img
								className='projects-card-col1-logo'
								src={`../../../../assets/images/${data.image}`}
								alt={`${data.title} Logo`}
							/>
						</div>
						<div className='projects-card-col2'>
							<div className='projects-card-col2-title'>
								<h2>{data.title}</h2>
								<h3>{data.subtitle}</h3>
							</div>
							<p>{data.desc}</p>
							<div className='projects-card-col2-bottom'>
								<div className='projects-card-col2-bottom-left'>
									<Button
										variant='outlined'
										disableRipple={true}
										onClick={() => {
											navigate(`/${data.route}`);
										}}
									>
										More Details
									</Button>
								</div>
								<div className='projects-card-col2-bottom-right'>
									<Button
										endIcon={<ArrowForwardOutlinedIcon />}
										disableRipple={true}
									>
										View on
									</Button>
									<a href={data.github} target='_blank'>
										<img
											src='../../../../assets/images/Github.png'
											alt='Github'
										/>
									</a>

									<a href='https://youtu.be/K6d4Sy2CwAA' target='_blank'>
										<img
											src='../../../../assets/images/Youtube.png'
											alt='Youtube'
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</>
		</div>
	);
}

export default Projects;
