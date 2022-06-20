import image1 from '../../../assets/images/Mervin.png';
import image2 from '../../../assets/images/Mervin2.png';
import image3 from '../../../assets/images/Scrabble.png';
import image4 from '../../../assets/images/Graduation.png';
import image5 from '../../../assets/images/Mervin3.png';
import image6 from '../../../assets/images/Silhouette.png';
import image7 from '../../../assets/images/Accenture.png';

export const projects = [
	{
		id: 0,
		route: '/altruwiz',
		title: 'AltruWiz',
		image: 'Altruwiz.svg',
		imageAlt: 'Big letter A integrated on a wizard hat',
		frame: 'Altruwiz2.png',
		frameAlt: 'Altruwiz showcase of different screens.',
		subtitle: 'Software Development 2',
		date: 'June 2022',
		desc: 'Altruwiz is a school project I developed with a team. It’s a website that serves as a consolidated center for community service activities and initiatives. It helps individuals and organizations to keep track of and participate in community events by exploring, creating, and promoting them.',
		role: 'Back-end developer',
		challenge:
			'Synchronizing with new team members have been difficult.  Having different schedules, tasks, and workloads increased the concerns in meeting project timelines and deliverables.',
		solution:
			'Knowledge sharing was the key solution we’ve done to improve our workflow. Synchronous coding and tutorials allowed all of us to understand one another and keep ourselves focused on each feature that we had implemented. Inspiring each other and being accountable to our respective tasks made us more productive in doing the project.',
		reflection:
			'It was great working with my team especially with a community focused project. Adding levels, achievements and quests features to organized events are some of our idealized solution to increase user engagement for this project.',
		stack: [
			'React.png',
			'Typescript.png',
			'Sass.png',
			'Html.png',
			'Firebase.png',
		],
		viewButton: {
			github: true,
			gdoc: false,
			yt: false,
			pdf: false,
			app: true,
			appLink: 'https://altruwiz.web.app/',
			appPath: 'Altruwiz.svg',
			githubLink: 'https://github.com/AltruWiz/altruWiz',
			githubPath: 'Github.png',
		},
	},
	{
		id: 1,
		route: '/booksynation',
		title: 'BookSyNation',
		image: 'Bookcine.svg',
		imageAlt: 'Injection inside a book',
		frame: 'Bookcine2.png',
		frameAlt: 'BookSyNation showcase of different screens.',
		subtitle: 'Software Development 1',
		desc: 'BookSyNation is a school project I made with a team.  It is a vaccination booking system intended for the facilitation of vaccination scheduling for the pandemic.',
		date: 'October 2021',
		role: 'Back-end developer, Front-end developer, UI/UX Designer (Mobile)',
		challenge:
			'Using Firebase for our back-end solution allowed me to explore back-end development. Making ends meet for our web and mobile application made it challenging for me since there were some functionalities that would work on mobile but not on web and vice versa. The hardest part was error handling and state management.',
		solution:
			'Researching and digging through Stack Overflow while undergoing trial and errors had been very helpful for me in the development phase. OOP concepts have also played a big role in handling user and admin data. Having only one month made us change our priorities in implementing Domain Driven Design and BLoC, checking states and passing contexts within the widget heirarchy have been our alternative solution to successfully deliver the web and mobile application.',
		reflection:
			'It was very satisfying to make something work from scratch. Seeing that our hard work and long hours paid off and that our project manager appreciated us made me want to keep going with this career.',
		stack: ['Flutter.png', 'Firebase.png'],
		viewButton: {
			github: true,
			gdoc: true,
			yt: false,
			pdf: false,
			app: true,
			appLink:
				'https://drive.google.com/file/d/14NNNYLmJ4yqL7JEYm3JKSWhcqHDNhqGX/view?fbclid=IwAR1qB_YJX3dZWmme8gmB5spmpoYtCPNk6Pea4ia6dN1DHc6O9AuWpZE0k4A',
			appPath: 'Bookcine.svg',
			gdocLink:
				'https://docs.google.com/document/d/1OJl-SOKKxXE1OlMbFmvfqLnRMilz8VrpuB8xSQ8FQck/edit?usp=sharing',
			githubLink: 'https://github.com/Book-cine/booksynation',
			githubPath: 'Github.png',
			gdocPath: 'Googledocs.png',
		},
	},
	{
		id: 2,
		route: '/recycl3r',
		title: 'ReCycl3R',
		image: 'Recycler.png',
		imageAlt: 'Robot on a green hexagon shape',
		frame: 'Recycler2.png',
		frameAlt: 'ReCycl3R showcase of different screens.',
		subtitle: 'Accenture Program the Future 2021',
		desc: 'I worked with a team on the Recycl3R project for Accenture Program The Future 2021. It is a simulation game for Android devices that will help people learn more about reducing waste and pollution.',
		date: 'July 2021',
		role: 'Front-end developer',
		challenge:
			'I had no experience with Flutter at all when I was thrown into the contest and put in charge of the front end. I was also taking two courses with deliverables at the same time, so it was tough to make progress and finish the MVP in one month.',
		solution:
			'It was a great chance to learn the Flutter framework and work with my great teammates. Researching and coding every time I could after courseworks was my approach in going through that whole month. Proposing and implementing designs to our prototype allowed me to understand and love Flutter.',
		reflection:
			"Overall, I'm glad I pushed myself and was able to finish what I started. Even though we weren't perfect, we were able to make it as finalists and gain valuable experience. Aside from that, what really drove me was knowing that what we were doing could help our communities and environment.",
		stack: ['Flutter.png', 'Firebase.png'],
		viewButton: {
			github: true,
			gdoc: false,
			yt: true,
			pdf: false,
			app: true,
			appLink:
				'https://drive.google.com/file/d/194x3QtL9JRxsa8sgcAAjFu3Bchk-KGmp/view?usp=sharing',
			appPath: 'Recycler.png',
			ytLink: 'https://youtu.be/K6d4Sy2CwAA',
			githubLink: 'https://github.com/Recycler-3R/recycler-v1',
			githubPath: 'Github.png',
			ytPath: 'Youtube.png',
		},
	},
	{
		id: 3,
		route: '/whitelist',
		title: 'WhiteList',
		image: 'Whitelist.svg',
		imageAlt: 'Letter W and L on a tile',
		frame: 'Whitelist2.png',
		frameAlt: 'WhiteList showcase of different screens.',
		subtitle: 'Modern Systems Analysis & Design',
		date: 'July 2021',
		desc: 'WhiteList is a school project I made with two other teammates. It is a centralized informational display hub of various rentable locations within Cebu. It provides its users with a simplified method for finding and connecting people to rentable opportunities.',
		role: 'Front-end developer, UI/UX Designer, Software Testing & Documentation',
		challenge:
			'Being in a team of 3 was difficult to fulfill all the requirements within a month. For me, I have yet to learn the front-end tech stack to be used during that time. I also had been working with ReCycl3R project during this time so it was twice as hard to pull off. ',
		solution:
			"The first thing I did was make good use of my time. Set priorities for each deliverable, and then stick to the plan. I learned how to help with front-end development from my teammates and from different online sources. I also helped design the app's UI/UX design. I made some parts in SRS, and it was my job to make the project's PMP, Test, and Design documents.",
		reflection:
			'Working on this project was both fun and moving. As my first project with a team, we had to redesign the UI/UX 3–4 times, implement changes, fix a lot of errors, and keep up with the deliverables. Still, we did it because we worked hard, got ideas from each other, and trusted one another.',
		stack: [
			'React.png',
			'Javascript.png',
			'Sass.png',
			'Html.png',
			'Firebase.png',
		],
		viewButton: {
			github: true,
			gdoc: false,
			yt: false,
			pdf: true,
			app: true,
			appLink: 'https://whitelist-develop.web.app/',
			appPath: 'Whitelist.svg',
			pdfLink:
				'https://drive.google.com/file/d/1RqGArqOhWDulmETL1pum-rhcKKXy9Xv-/view?usp=sharing',
			githubLink: 'https://github.com/WhiteList-Int/white-list',
			githubPath: 'Github.png',
			pdfPath: 'Pdf.png',
		},
	},
	{
		id: 4,
		route: '/datagrades',
		title: 'DataGrades',
		image: 'Datagrades.png',

		imageAlt: 'Letter D + letter G',
		frame: 'Datagrades2.png',
		frameAlt: 'DataGrades showcase of different screens.',
		subtitle: 'Software Design',
		desc: 'DataGrades is another school project I’ve made with a team. It was made to make the process of entering student grades more efficient. The application handles the management of the subject load, the input and computation of student grades, and the viewing of grades by students.',
		date: 'November 2021',
		role: 'UI/UX Designer (Mobile), Software Documentation',
		challenge:
			"Creativity and talent in any art have never been my strong points. Seeing aesthetic and well-done works online made me want to take charge of the mobile design for our app. Since we weren't supposed to implement the system, documentation was the second most important part of this project.",
		solution:
			'Watching design tutorials from various design specialists and applying design principles to our project made me improve my skills. My teammates and I talked about our concerns and ideas on how to make it better, especially for the people we were making it for.',
		reflection:
			"By doing surveys, we were able to find out what teachers go through in schools and what problems they have with their grading workflow. We're still doing research and trying to get validation from experts to see if what we're making could really help teachers and students.",
		stack: ['Figma.png'],
		viewButton: {
			github: false,
			gdoc: true,
			yt: false,
			pdf: false,
			gdocLink:
				'https://docs.google.com/document/d/1OJl-SOKKxXE1OlMbFmvfqLnRMilz8VrpuB8xSQ8FQck/edit?usp=sharing',
			gdocPath: 'Googledocs.png',
		},
	},
	{
		id: 5,
		route: '/inteletraf',
		title: 'InTeleTraf',
		image: 'Inteletraf.svg',
		imageAlt: 'Letter I,T,T in traffic light',
		frame: 'Inteletraf2.png',
		frameAlt: 'Inteletraf showcase of different screens.',
		subtitle: 'Technopreneurship',
		desc: 'Inteletraf is a team project in school.  Its goal is to improve traffic and transportation systems by building an Internet of Things (IOT) system that connects people, vehicles, and road equipment to the traffic to make transportation easier, traffic management smarter, and real-time traffic data easier to access.',
		date: 'December 2021',
		role: 'UI/UX Designer',
		challenge:
			"As the project's UI/UX Chief Officer, I had to be clear about what we were going for with the designs and ensure that what we were creating would provide a wonderful experience to our target users.",
		solution:
			"By making a customer journey and empathy map for each of our users' personas, we were able to figure out where they were having trouble with Cebu's current transportation issues. With the information we got from talking to passengers and drivers, we were also able to make changes to our designs that fit with what we observed.",
		reflection:
			'Working with people from various college degrees was both inspiring and challenging. Since we specialize in different fields, we had to figure out how to effectively communicate our jargons. Being with a business major allowed me to see and understand business operations for our product.',
		stack: ['Figma.png'],
		viewButton: {
			github: false,
			gdoc: true,
			yt: false,
			pdf: false,
			gdocLink:
				'https://docs.google.com/document/d/1OJl-SOKKxXE1OlMbFmvfqLnRMilz8VrpuB8xSQ8FQck/edit?usp=sharing',
			gdocPath: 'Googledocs.png',
		},
	},

	{
		id: 6,
		route: '/tingbits',
		title: 'TingBits',
		image: 'Tingbits.png',
		imageAlt: 'Hand holding a money bag.',
		frame: 'Tingbits2.png',
		frameAlt: 'Tingbits showcase of different screens.',
		subtitle: 'Personal Project',
		date: 'Ongoing',
		desc: "TingBits is a personal project that I'm still working on. It's a mobile application that makes lending and borrowing money simple.",
		role: 'Full-stack Developer, UI/UX Designer',
		challenge:
			'Implementing a financial app would require a great amount of time and work on my part, and integrating APIs from payment services such as Gcash or Paymaya would make it much more difficult.',
		solution:
			'My strategy for determining and finalizing the functionality of my app consisted of beginning with the UI/UX design. Priorities for doing the project so far include devoting time to study and identifying alternatives. It would be wasteful to go forward without knowing whether or not my ideas are viable.',
		reflection:
			'After multiple revisions of the designs, I find it fun to take my time building the app since I am improving my abilities and learning a lot. As long as I keep working on it and doing my best, the results will come.',
		stack: ['Flutter.png', 'Firebase.png'],
		viewButton: {
			github: true,
			gdoc: false,
			yt: false,
			pdf: false,
			app: false,
			githubLink: 'https://github.com/jdesolate/lending',
			githubPath: 'Github.png',
		},
	},
];

export const pics = [image1, image2, image3, image4, image5, image6, image7];
