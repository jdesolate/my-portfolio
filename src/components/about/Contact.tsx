import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useState } from 'react';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function copyToClip(text: any) {
	navigator.clipboard.writeText(text);
}

function Contact() {
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedNum, setCopiedNum] = useState(false);
	const email = 'mervinjohn.tampus@cit.edu';
	const contNum = '+639 0898 59996';

	return (
		<div className='contact' id='contact-me'>
			<h3>Feel free to contact me through:</h3>
			<div className='contact-cont'>
				<div className='contact-cont-row'>
					<a href='mailto:mervinjohn.tampus@cit.edu'>
						<Button
							disableRipple={true}
							startIcon={<EmailOutlinedIcon />}
							onClick={() => {
								copyToClip(email);
								setCopiedEmail(true);
								setTimeout(() => setCopiedEmail(false), 3000);
							}}
						>
							{email}
						</Button>
					</a>

					{copiedEmail ? (
						<div className='contact-cont-row-pop'>
							<ContentPasteOutlinedIcon color='primary' />
						</div>
					) : null}
				</div>
				<div className='contact-cont-row'>
					<Button
						disableRipple={true}
						startIcon={<LocalPhoneOutlinedIcon />}
						onClick={() => {
							copyToClip(contNum);
							setCopiedNum(true);
							setTimeout(() => setCopiedNum(false), 3000);
						}}
					>
						{contNum}
					</Button>
					{copiedNum ? (
						<div className='contact-cont-row-pop'>
							<ContentPasteOutlinedIcon color='primary' />
						</div>
					) : null}
				</div>
				<a
					className='contact-cont-resume'
					href='https://drive.google.com/file/d/1kpcpWJ-6kg-rtDT9r--dvUGBpJvbdWax/view?usp=sharing'
					target='_blank'
				>
					<Button disableRipple={true} startIcon={<InsertDriveFileIcon />}>
						View My Resume
					</Button>
				</a>
			</div>
		</div>
	);
}

export default Contact;
