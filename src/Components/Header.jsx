import React from 'react';
import TextBounce from '../Utils/TextBounce';

function Header() {
	const title = 'Alexandre Maunoury'.split('');

	return (
		<div>
			<h1 className=" font-gruppo text-clamp text-center pt-[20px] pb-[80px] px-[10px]  ">
				{title.map((letter, index) => (
					<TextBounce key={index}>
						<span className="hover:text-[#8f95d3] ">{letter === ' ' ? '\u00A0' : letter} </span>
					</TextBounce>
				))}
			</h1>
		</div>
	);
}

export default Header;
