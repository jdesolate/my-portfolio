import Button from '@mui/material/Button';
import '../../main.scss';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Projects() {
	return (
		<>
			<div className='projects'>
				<div className='projects-header'>
					<div className='projects-header-title'>
						<div className='projects-header-title-comet'></div>
						<h1>Projects</h1>
					</div>
					<p>
						Most of these projects are made together with a team. I worked in a
						variety of roles such as front-end developer, back-end developer,
						UI/UX Designer.
					</p>
				</div>
				<div className='projects-card'>
					<div className='projects-card-col1'>
						<img
							className='projects-card-col1-frame'
							src='../../../../assets/images/Recycler2.png'
							alt='Recycler Frame'
						/>
						<div className='projects-card-col1-overlay'></div>
						<img
							className='projects-card-col1-logo'
							src='../../../../assets/images/Recycler.png'
							alt='Recycler logo'
						/>
					</div>
					<div className='projects-card-col2'>
						<div className='projects-card-col2-title'>
							<h2>Recycl3R</h2>
							<h3>Accenture Program the Future 2021</h3>
						</div>
						<p>
							Recycl3R is a mobile simulation game that will help in developing
							awareness for waste reduction and pollution. With its inherent
							game mechanics, the users shall be able to engage and gain more
							knowledge about waste management as they play.
						</p>
						<div className='projects-card-col2-bottom'>
							<div className='projects-card-col2-bottom-left'>
								<Button variant='outlined'>More Details</Button>
							</div>
							<div className='projects-card-col2-bottom-right'>
								<Button endIcon={<ArrowForwardOutlinedIcon />}>View on</Button>
								<img src='../../../../assets/images/Github.png' alt='Github' />
								<img
									src='../../../../assets/images/Youtube.png'
									alt='Youtube'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
