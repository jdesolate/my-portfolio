import { motion } from 'framer-motion';
import Contact from './Contact';
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

			<div className='about-desc1'>
				<p>
					I thrive on creating innovative and impactful websites that bring ideas to life. Together with my partners,
					I collaborate with clients to design and develop digital solutions that are both functional and inspiring.
					Every project is an opportunity to embrace new challenges, learn, and grow.
				</p>
			</div>

			<motion.div className='about-hero'>
				<motion.div
					ref={carousel}
					drag='x'
					dragConstraints={{ right: 0, left: -width - 1000 }}
					initial={{ x: 0 }}
					animate={{ x: -1000 }}
					transition={{ delay: 10, duration: 25 }}
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

			<div className='about-desc2'>
				<h3>I’m inspired in the saying:</h3>
				<div className='about-desc2-saying'>
					<div className='about-desc2-saying-quote'>
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
