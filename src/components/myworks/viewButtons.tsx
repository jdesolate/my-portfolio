function viewButtons(refLink?: string, refPath?: string) {
	return (
		<a href={refLink} target='_blank'>
			<img src={`../../../../assets/images/${refPath}`} alt={refPath} />
		</a>
	);
}

export default viewButtons;
