import { motion } from 'framer-motion';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';

function About() {
	return (
		<>
			<div className='about'>
				<div className='header-bg' />
				<div className='about-title'>
					<div className='about-title-comet'></div>
					<h1>About Me</h1>
				</div>
				<div className='about-desc1'>
					<h2>
						<Typewriter
							options={{ loop: true }}
							onInit={(typewriter) => {
								typewriter
									.changeDelay(15)
									.typeString(
										'I’m currently a 3rd year Computer Engineering student in Cebu Institute of Technology - University.'
									)
									.pauseFor(2000)
									.deleteAll(5)
									.typeString(
										'I started learning programming during my 1st year in college.'
									)
									.pauseFor(2000)
									.deleteAll(5)
									.typeString(
										'As hard as it was, I fell in love with it in no time.'
									)
									.pauseFor(2000)
									.deleteAll(5)
									.start();
							}}
						/>
					</h2>
				</div>
				<div className='about-desc2'>
					<div className='about-desc2-comet'></div>
					<h2>
						Solving problems, being in different teams, delivering works, and
						accomplishing goals drives my passion in this field.
					</h2>
				</div>
				<div className='about-hero'>
					<div className='about-hero-image'>
						<img src='../../../assets/images/Mervin.png' alt='Mervin' />
					</div>
					<div className='about-hero-right'>
						<div className='about-hero-right-top'>
							<h2>In my life, people called me as:</h2>
							<div className='about-hero-right-top-entries'>
								<p>Crazy</p>
								<p>Serious</p>
								<p>Simple</p>
								<p>Kind</p>
								<p>Funny</p>
								<p>Smiling</p>
								<p>Careful</p>
								<p>Reliable</p>
								<p>Focused</p>
								<p>Dedicated</p>
							</div>
						</div>
						<div className='about-hero-right-divider'></div>
						<div className='about-hero-right-bot'>
							<h2>I enjoy spending time on:</h2>
							<div className='about-hero-right-bot-entries'>
								<p>E-books</p>
								<p>Self-development</p>
								<p>Flutter</p>
								<p>Scrabble</p>
								<p>Manhwa</p>
								<p>Anime</p>
							</div>
						</div>
					</div>
				</div>
				<div className='about-desc3'>
					<h2>I’m inspired in the saying:</h2>
					<div className='about-desc3-saying'>
						<div className='about-desc3-saying-quote'>
							<h3>“Roads were made for journeys, not destinations.” </h3>
							<h4>- Confucius</h4>
							<p>
								I believe that everyone was born with the will to succeed in
								life. However, the connections we make along the way help us
								recognize that we are not alone. That we are capable of living
								not just for ourselves but also for others.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Contact />
		</>
	);
}

export default About;
