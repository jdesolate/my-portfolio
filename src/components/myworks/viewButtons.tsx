import { GithubLogo } from "../../constants/ImageSources";
import { getFrameLogoImgSrc } from "./Projects";
import GoogleDocsImage from '../../../assets/images/Googledocs.png';
import YTImage from '../../../assets/images/Youtube.png';
import PDFImage from '../../../assets/images/Pdf.png';

function getViewButtonSrc(path?: string) {
	if (path && getFrameLogoImgSrc(path) != "None") {
		return getFrameLogoImgSrc(path)
	} else {
		switch (path) {
			case "Github.png": return GithubLogo;
			case 'Googledocs.png': return GoogleDocsImage;
			case 'Youtube.png': return YTImage;
			case 'Pdf.png': return PDFImage;
		}
	}
}

function viewButtons(refLink?: string, refPath?: string, refAlt?: string) {
	return (
		<a className='view-buttons' href={refLink} target='_blank'>
			<img src={getViewButtonSrc(refPath)} alt={refAlt} />
		</a>
	);
}

export default viewButtons;
