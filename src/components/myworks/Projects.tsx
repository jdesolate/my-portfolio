import Button from '@mui/material/Button';
import { projects } from './Strings';
import { useNavigate } from 'react-router-dom';
import viewButtons from './viewButtons';
import { motion } from 'framer-motion';

//image
import AltruwizImage from '../../../assets/images/Altruwiz.svg';
import BookcineImage from '../../../assets/images/Bookcine.svg';
import RecyclerImage from '../../../assets/images/Recycler.png';
import WhitelistImage from '../../../assets/images/Whitelist.svg';
import DatagradesImage from '../../../assets/images/Datagrades.png';
import InteletrafImage from '../../../assets/images/Inteletraf.svg';
import TingbitsImage from '../../../assets/images/Tingbits.png';

//frame
import AltruwizFrame from '../../../assets/images/Altruwiz2.png';
import BookcineFrame from '../../../assets/images/Bookcine2.png';
import RecyclerFrame from '../../../assets/images/Recycler2.png';
import WhitelistFrame from '../../../assets/images/Whitelist2.png';
import DatagradesFrame from '../../../assets/images/Datagrades2.png';
import InteletrafFrame from '../../../assets/images/Inteletraf2.png';
import TingbitsFrame from '../../../assets/images/Tingbits2.png';

export function getFrameLogoImgSrc(name: string) {
	switch (name) {
		case 'Altruwiz.svg': return AltruwizImage;
		case 'Bookcine.svg': return BookcineImage;
		case 'Recycler.png': return RecyclerImage;
		case 'Whitelist.svg': return WhitelistImage;
		case 'Datagrades.png': return DatagradesImage;
		case 'Inteletraf.svg': return InteletrafImage;
		case 'Tingbits.png': return TingbitsImage;
		default: return "None";
	}
}

function getFrameImgSrc(name: string) {
	switch (name) {
		case 'Altruwiz2.png': return AltruwizFrame;
		case 'Bookcine2.png': return BookcineFrame;
		case 'Recycler2.png': return RecyclerFrame;
		case 'Whitelist2.png': return WhitelistFrame;
		case 'Datagrades2.png': return DatagradesFrame;
		case 'Inteletraf2.png': return InteletrafFrame;
		case 'Tingbits2.png': return TingbitsFrame;
	}
}

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
							<h2>Projects</h2>
						</div>
						<p>
							Most of these projects were made together with a team. I worked in
							a variety of roles such as front-end developer, back-end
							developer, UI/UX Designer. References have been compiled to a
							Google Docs file for more information about the projects.
						</p>
					</div>
					{projects.map((data, key) => (
						<motion.div
							className='projects-card'
							key={key}
							whileHover={{
								scale: 1.025,
								boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
							}}
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
									src={getFrameImgSrc(data.frame)}
									alt={`${data.frameAlt}`}
								/>
								<div className='projects-card-col1-overlay'></div>
								<img
									className='projects-card-col1-logo'
									src={getFrameLogoImgSrc(data.image)}
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
