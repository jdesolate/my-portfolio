function viewButtons(refLink?: string, refPath?: string, refAlt?: string) {
	return (
		<a className='view-buttons' href={refLink} target='_blank'>
			<img src={`../../../../assets/images/${refPath}`} alt={refAlt} />
		</a>
	);
}

export default viewButtons;
