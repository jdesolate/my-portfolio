import FlutterLogo from '../../../../assets/images/Flutter.png';
import FirebaseLogo from '../../../../assets/images/Firebase.png';
import ReactLogo from '../../../../assets/images/React.png';
import JavascriptLogo from '../../../../assets/images/Javascript.png';
import TypescriptLogo from '../../../../assets/images/Typescript.png';
import HtmlLogo from '../../../../assets/images/Html.png';
import SassLogo from '../../../../assets/images/Sass.png';
import FigmaLogo from '../../../../assets/images/Figma.png';

function getPathAlt(path: string) {
	switch (path) {
		case 'Flutter.png': return 'Flutter Logo';
		case 'Firebase.png': return 'Firebase Logo';
		case 'React.png': return 'React Logo';
		case 'Typescript.png': return 'TypeScript Logo';
		case 'Javascript.png': return 'JavaScript Logo';
		case 'Html.png': return 'Html Logo';
	}
}

function getPathSrc(path: string) {
	switch (path) {
		case 'Flutter.png': return FlutterLogo;
		case 'Firebase.png': return FirebaseLogo;
		case 'React.png': return ReactLogo;
		case 'Typescript.png': return TypescriptLogo;
		case 'Javascript.png': return JavascriptLogo;
		case 'Html.png': return HtmlLogo;
		case 'Sass.png': return SassLogo;
		case 'Figma.png': return FigmaLogo;
	}
}

function Stack(path: string, key: any) {
	return (
		<img
			key={key}
			src={getPathSrc(path)}
			alt={getPathAlt(path)}
		/>
	);
}

export default Stack;
