import FlutterLogo from '../../../assets/images/Flutter.png';
import FirebaseLogo from '../../../assets/images/Firebase.png';
import ReactLogo from '../../../assets/images/React.png';
import NextjsLogo from '../../../assets/images/nextjs.svg';
import JavascriptLogo from '../../../assets/images/Javascript.png';
import TypescriptLogo from '../../../assets/images/Typescript.png';
import SassLogo from '../../../assets/images/Sass.png';
import CLogo from '../../../assets/images/Clogo.png';
import CsharpLogo from '../../../assets/images/Csharplogo.png';
import PythonLogo from '../../../assets/images/Python.png';

function Techstack() {
	return (
		<div className='techStack'>
			<div className='techStack-cont1'>
				<h2>Tech Stack</h2>
				<p>
					I’ve had the opportunity to work with a wide range of technologies, honing my skills and delivering impactful solutions.
				</p>
			</div>
			<div className='techStack-cont2'>
				<img src={FlutterLogo} alt='Flutter logo' />
				<img src={FirebaseLogo} alt='Firebase logo' />
				<img src={ReactLogo} alt='React logo' />
				<img src={NextjsLogo} alt='NextJS logo' />
				<img src={JavascriptLogo} alt='JavaScript logo' />
				<img src={TypescriptLogo} alt='TypeScript logo' />
				<img src={SassLogo} alt='Sass logo' />
				<img src={CLogo} alt='C logo' />
				<img src={CsharpLogo} alt='C# logo' />
				<img src={PythonLogo} alt='Python logo' />
			</div>
		</div>
	);
}

export default Techstack;
