import React from 'react';

function Error() {
	return (
		<div
			style={{
				margin: '0',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<h2>Error 404</h2>
			<p>Page not found</p>
		</div>
	);
}

export default Error;
