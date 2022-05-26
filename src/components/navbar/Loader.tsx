import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { DotLoader } from 'react-spinners';

function Loader() {
	const [time, setTime] = useState(true);

	setTimeout(() => setTime(false), 2000);

	return (
		<div
			className={time ? 'loadScreen display-flex' : 'loadScreen display-none'}
		>
			<DotLoader size={80} color={'#1e90ff'} speedMultiplier={1.5} />
		</div>
	);
}

export default Loader;
