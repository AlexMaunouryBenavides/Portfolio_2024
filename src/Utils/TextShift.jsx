import React from 'react';
import { motion } from 'framer-motion';

const TextShift = ({ children }) => {
	const shiftAnimation = {
		x: [0, -20, 20, -10, 10, 0],
		transition: { duration: 1 },
	};

	return (
		<motion.span className="inline-block cursor-pointer" animate={shiftAnimation}>
			{children}
		</motion.span>
	);
};

export default TextShift;
