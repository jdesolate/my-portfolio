// import { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

function Details() {
	return (
		<>
			<div className='projDetails'>
				<div className='projDetails-header'>
					<div className='projDetails-header-head'>
						<img src='../../../../assets/images/Bookcine.png' alt='' />
						<div className='projDetails-header-head-title'>
							<h2>BookSyNation</h2>
							<h3>Software Development 1</h3>
							<h4>October 2021</h4>
						</div>
					</div>
					<div className='projDetails-header-body'>
						<p>
							BookSyNation is a school project I made with a team. It is a
							vaccination booking system intended for the facilitation of
							vaccination scheduling for the pandemic.
						</p>
					</div>
				</div>
				<div className='projDetails-hero'>
					<div className='projDetails-hero-circle'></div>
					<img src='../../../../assets/images/Bookcine2.png' alt='' />
					<div className='projDetails-hero-right'>
						<h2>My Role</h2>
						<p>
							Back-end developer, Front-end developer, UI/UX Designer (Mobile)
						</p>
						<h2>Challenge</h2>
						<p>
							Using Firebase for our back-end solution allowed me to explore
							back-end development. Making ends meet for our web and mobile
							application made it challenging for me since there were some
							functionalities that would work on mobile but not on web and vice
							versa. The hardest part was error handling and state management.
						</p>
						<div className='projDetails-hero-right-stack'>
							<img src='../../../../assets/images/Firebase.png' alt='' />
						</div>
					</div>
				</div>
				<div className='projDetails-botSection'>
					<div className='projDetails-hero-comet'></div>
					<h2>Solution</h2>
					<p>
						Researching and digging through Stack Overflow while undergoing
						trial and errors had been very helpful for me in the development
						phase. OOP concepts have also played a big role in handling user and
						admin data. Having only one month made us change our priorities in
						implementing Domain Driven Design and BLoC, checking states and
						passing contexts within the widget heirarchy have been our
						alternative solution to successfully deliver the web and mobile
						application.
					</p>
					<h2>Reflection</h2>
					<p>
						It was very satisfying to make something work from scratch. Seeing
						that our hard work and long hours paid off and that our project
						manager appreciated us made me want to keep going with this career.
					</p>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Details;

/*
const projPages = [
		'/projects/booksynation',
		'/projects/recycl3r',
		'/projects/whitelist',
		'/projects/datagrades',
		'/projects/altruwiz',
	];
	const navigate = useNavigate();
	const location = useLocation();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const div = document.querySelector('html');
		div.scrollTo(0, 0);
		setIndex(projPages.indexOf(location.pathname));
	}, [location]);

	return <div className='projDetails-body'>{projPages[index]}</div>;
*/
