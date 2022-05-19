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
			<div className='projects' id='proj'>
				<>
					<div className='projects-comet'></div>
					<div className='projects-header'>
						<div className='projects-header-title'>
							<h1>Projects</h1>
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
												navigate(`${data.route}`);
											}}
										>
											More Details
										</Button>
									</div>
									<div className='projects-card-col2-bottom-right'>
										<>
											<Button
												endIcon={<ArrowForwardOutlinedIcon />}
												disableRipple={true}
											>
												View on
											</Button>
											{data.viewButton.github
												? viewButtons(
														data.viewButton.githubLink,
														data.viewButton.githubPath
												  )
												: null}
											{data.viewButton.gdoc
												? viewButtons(
														data.viewButton.gdocLink,
														data.viewButton.gdocPath
												  )
												: null}
											{data.viewButton.yt
												? viewButtons(
														data.viewButton.ytLink,
														data.viewButton.ytPath
												  )
												: null}
											{data.viewButton.pdf
												? viewButtons(
														data.viewButton.pdfLink,
														data.viewButton.pdfPath
												  )
												: null}
											{data.viewButton.app
												? viewButtons(
														data.viewButton.appLink,
														data.viewButton.appPath
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
