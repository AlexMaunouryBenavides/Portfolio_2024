import React from 'react';
import Socials from '../Data/Socials';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="text-center pt-[10vh]">
			<div className="flex justify-center gap-[40px] ">
				{Socials.map((item) => (
					<a key={item.id} target="_blank" href={item.link}>
						<img
							className="cursor-pointer hover:scale-110 transition-all duration-200"
							key={item.id}
							src={item.image}
							alt={item.alt}
						/>
					</a>
				))}
			</div>
			<p className="font-gruppo text-[12px] pt-[32px] ">Design et dev par Alexandre Maunoury © 2024</p>
		</div>
	);
}

export default Footer;
