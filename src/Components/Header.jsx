import React from 'react';
import TextBounce from '../Utils/TextBounce';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
	const title = 'Alexandre Maunoury'.split('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleIsMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuVars = {
		start: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		end: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const Menu = [
		{ id: 1, label: 'Projets', link: '#projects' },
		{ id: 2, label: 'Contact', link: '#contact' },
	];

	return (
		<nav className="">
			<h1 className=" font-gruppo text-clamp text-center pt-[20px] pb-[80px] px-[10px]  ">
				{title.map((letter, index) => (
					<TextBounce key={index}>
						<span className="hover:text-[#8f95d3] ">{letter === ' ' ? '\u00A0' : letter} </span>
					</TextBounce>
				))}
			</h1>
			<ul className="absolute top-[70px] right-16 lg:flex items-center gap-6 hidden ">
				{Menu.map((el) => (
					<li className="hover:text-[#8f95d3] duration-150 font-semibold uppercase" key={el.id}>
						<a href={el.link}>{el.label} </a>
					</li>
				))}
			</ul>
			<div
				onClick={handleIsMenuOpen}
				className="lg:hidden fixed top-12 right-0 flex items-center gap-6 z-10 ">
				<Hamburger handleIsMenuOpen={handleIsMenuOpen} isMenuOpen={isMenuOpen} />
			</div>
			<AnimatePresence>
				{isMenuOpen ? (
					<motion.div
						variants={menuVars}
						initial="start"
						animate="animate"
						exit="end"
						className="bg-[#8f95d3] fixed top-0 left-0 w-screen h-full origin-top ">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{Menu.map((el) => (
								<div
									key={el.id}
									onClick={handleIsMenuOpen}
									className="hover:text-white duration-300 cursor-pointer text-3xl uppercase py-6">
									<a href={el.link}>{el.label}</a>
								</div>
							))}
						</div>
					</motion.div>
				) : (
					''
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Header;
