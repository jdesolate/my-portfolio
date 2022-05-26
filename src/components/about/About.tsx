import { motion } from 'framer-motion';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';
import { pics } from '../myworks/Strings';
import { useState, useRef, useEffect } from 'react';

function About() {
	const [width, setWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
	}, []);

	return (
		<div className='about'>
			<div
				id='about-me'
				style={{ position: 'absolute', top: '-6rem', left: '0' }}
			/>
			<div className='about-title'>
				<motion.div
					className='about-title-comet'
					initial={{ top: '-20rem', left: '30rem', opacity: 0 }}
					animate={{ left: '8rem', top: '3rem ', opacity: 0.2 }}
					transition={{ delay: 2, type: 'tween', duration: 0.8 }}
				></motion.div>
				<h2>About Me</h2>
			</div>

			<div className='about-desc2'>
				<p>
					I like creating software and UI/UX designs. Constantly encouraging
					myself, adapting to new situations, and pursuing my goals are what
					have shaped me into the person I am today. Aside from all of this, I
					try to spread as much joy as I can everywhere I go.
				</p>
			</div>

			<motion.div className='about-hero'>
				<motion.div
					ref={carousel}
					drag='x'
					dragConstraints={{ right: 0, left: -width - 1000 }}
					initial={{ x: 0 }}
					animate={{ x: -1000 }}
					transition={{ delay: 8, duration: 25 }}
					className='about-hero-carousel'
				>
					<>
						{pics.map((image) => {
							return (
								<motion.div className='about-hero-carousel-image' key={image}>
									<img src={image} alt='Mervin' />
								</motion.div>
							);
						})}
					</>
				</motion.div>
			</motion.div>

			<div className='about-desc3'>
				<h3>I’m inspired in the saying:</h3>
				<div className='about-desc3-saying'>
					<div className='about-desc3-saying-quote'>
						<h3>“Roads were made for journeys, not destinations.” </h3>
						<h4>- Confucius</h4>
						<p>
							I believe that everyone was born with the will to succeed in life.
							However, the connections we make along the way help us constantly
							realize that we are not alone. That we are capable of living not
							just for ourselves but also for others.
						</p>
					</div>
				</div>
			</div>

			<Contact />
		</div>
	);
}

export default About;

/*
	<ParallaxLayer offset={0} speed={2}>
						<Navbar />
				<div className='about'>
					
						<div className='header-bg' />
						<div className='about-title'>
							<motion.div
								className='about-title-comet'
								initial={{ top: '-20rem', left: '30rem', opacity: 0 }}
								animate={{ left: '10rem', top: '2rem ', opacity: 0.5 }}
								transition={{ delay: 0.2, type: 'tween', duration: 0.8 }}
							></motion.div>
							<h1>About Me</h1>
						</div>

						<div className='about-desc1'>
							<h2>
								<Typewriter
									options={{ loop: true }}
									onInit={(typewriter) => {
										typewriter
											.changeDelay(2)
											.typeString(
												'I’m currently a 3rd year Computer Engineering student in Cebu Institute of Technology - University.'
											)
											.pauseFor(2000)
											.deleteAll(2)
											.typeString(
												' I started learning programming during my 1st year in college.'
											)
											.pauseFor(2000)
											.deleteAll(2)
											.typeString(
												' As hard as it was, I fell in love with it in no time.'
											)
											.pauseFor(2000)
											.deleteAll(2)
											.start();
									}}
								/>
							</h2>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={1} speed={1}>
						<motion.div
							className='about-desc2'
							initial={{ top: -1000, left: 1000 }}
							animate={{ top: 0, left: 0 }}
							transition={{ delay: 5, type: 'tween', duration: 2 }}
						>
							<div className='about-desc2-comet'></div>
							<h2>
								Solving problems, being in different teams, delivering works,
								and accomplishing goals drives my passion in this field.
							</h2>
						</motion.div>
					</ParallaxLayer>
					<ParallaxLayer offset={2} speed={1.5}>
						<div className='about-hero'>
							<div className='about-hero-image'>
								<img src='../../../assets/images/Mervin2.png' alt='Mervin' />
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
					</ParallaxLayer>
					<ParallaxLayer offset={2.5} speed={2}>
						<div className='about-desc3'>
							<h2>I’m inspired in the saying:</h2>
							<div className='about-desc3-saying'>
								<div className='about-desc3-saying-quote'>
									<h3>“Roads were made for journeys, not destinations.” </h3>
									<h4>- Confucius</h4>
									<p>
										I believe that everyone was born with the will to succeed in
										life. However, the connections we make along the way help us
										recognize that we are not alone. That we are capable of
										living not just for ourselves but also for others.
									</p>
								</div>
							</div>
						</div>
						</ParallaxLayer>
				</div>
				<ParallaxLayer offset={3} speed={1}>
					<Contact />
				
				<Footer />
				</ParallaxLayer>
*/
