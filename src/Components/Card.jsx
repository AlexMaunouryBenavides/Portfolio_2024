import React, { useState } from 'react';

function Card({ stack }) {
	const [isHover, setIsHover] = useState(false);
	const cardCSS =
		'bg-[#f4fcff] w-[200px] h-[150px] md:w-[300px] md:h-[150px] shadow-custom flex justify-center items-center text-[32px] font-genos uppercase cursor-pointer bg-[linear-gradient(45deg,transparent_25%,#8f95d3a0_50%,transparent_75%,transparent_100%)] relative max-w-md overflow-hidden  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat ';

	const handleHover = () => {
		setIsHover(true);
	};
	const handleLeaveHover = () => {
		setIsHover(false);
	};

	return (
		<div
			onMouseEnter={handleHover}
			onMouseLeave={handleLeaveHover}
			className={`${cardCSS} ${
				isHover ? 'hover:bg-[position:100%_0,0_0] hover:duration-[300ms]' : ''
			}`}>
			{stack}
		</div>
	);
}

export default Card;
