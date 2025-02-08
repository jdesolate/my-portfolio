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
	// const [copiedNum, setCopiedNum] = useState(false);
	const email = 'mj.tampus2825@gmail.com';
	// const contNum = '+639 0898 59996';

	return (
		<div className='contact' id='contact-me'>
			<h3>Feel free to contact me through:</h3>
			<div className='contact-cont'>
				<div className='contact-cont-row'>
					<a href='mailto:mj.tampus2825@gmail.com'>
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
				{/* <div className='contact-cont-row'>
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
				</div> */}
				<a
					className='contact-cont-resume'
					href='https://drive.google.com/file/d/1mPD_eBjK9Y7o1LhigZ0U_2pQEGH8UX5e/view?usp=sharing'
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
