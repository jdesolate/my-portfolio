function viewButtons(refLink?: string, refPath?: string) {
	return (
		<a className='view-buttons' href={refLink} target='_blank'>
			<img src={`../../../../assets/images/${refPath}`} alt={refPath} />
		</a>
	);
}

export default viewButtons;
