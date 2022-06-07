function pathAlt(path: string) {
	switch (path) {
		case 'Flutter.png':
			return 'Flutter Logo';
		case 'Firebase.png':
			return 'Firebase Logo';
		case 'React.png':
			return 'React Logo';
		case 'Typescript.png':
			return 'TypeScript Logo';
		case 'Javascript.png':
			return 'JavaScript Logo';
		case 'Html.png':
			return 'Html Logo';
	}
}

function Stack(path: string, key: any) {
	return (
		<img
			key={key}
			src={`../../../../assets/images/${path}`}
			alt={pathAlt(path)}
		/>
	);
}

export default Stack;
