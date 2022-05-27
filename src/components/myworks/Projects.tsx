import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { projects } from './Strings';
import { useNavigate } from 'react-router-dom';
import viewButtons from './viewButtons';
import { motion } from 'framer-motion';

function Projects() {
	const navigate = useNavigate();

	return (
		<>
			<div className='projects'>
				<>
					<div
						id='proj'
						style={{ position: 'absolute', top: '-6rem', left: '0' }}
					/>
					<div className='projects-header'>
						<div className='projects-header-title'>
							<h2>Portfolio</h2>
						</div>
						<p>
							Most of these projects are made together with a team. I worked in
							a variety of roles such as front-end developer, back-end
							developer, UI/UX Designer.
						</p>
					</div>
					{projects.map((data) => (
						<motion.div
							className='projects-card'
							whileHover={{ scale: 1.025 }}
							transition={{ duration: 0.2, type: 'tween' }}
						>
							<div
								className='projects-card-col1'
								onClick={() => {
									navigate(`${data.route}`);
								}}
							>
								<img
									className='projects-card-col1-frame'
									src={`../../../../assets/images/${data.frame}`}
									alt={`${data.frameAlt}`}
								/>
								<div className='projects-card-col1-overlay'></div>
								<img
									className='projects-card-col1-logo'
									src={`../../../../assets/images/${data.image}`}
									alt={`${data.imageAlt} Logo`}
								/>
							</div>
							<div className='projects-card-col2'>
								<div className='projects-card-col2-title'>
									<h3>{data.title}</h3>
									<h4>{data.subtitle}</h4>
								</div>
								<p>{data.desc}</p>
								<div className='projects-card-col2-bottom'>
									<div className='projects-card-col2-bottom-left'>
										<Button
											className='projects-card-col2-bottom-left-button1'
											variant='outlined'
											disableRipple={true}
											onClick={() => {
												navigate(`${data.route}`);
											}}
										>
											More Details
										</Button>
									</div>
									<div className='projects-card-col2-bottom-right'>
										<>
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
														'Project Application Logo'
												  )
												: null}
										</>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</>
			</div>
		</>
	);
}

export default Projects;
