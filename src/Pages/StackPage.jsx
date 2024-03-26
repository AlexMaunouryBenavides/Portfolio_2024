import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import TextShift from '../Utils/TextShift';
import TextBounce from '../Utils/TextBounce';

function StackPage() {
	const { id } = useParams();
	const selectedData = [data.find((item) => item.id === parseInt(id, 10))];

	function getRandomPadding() {
		const paddingValues = [
			'mx-[10px]',
			'mx-[20px]',
			'mx-[25px]',
			'mx-[30px]',
			'mx-[35px]',
			'mx-[40px]',
		];
		const randomIndex = Math.floor(Math.random() * paddingValues.length);
		return paddingValues[randomIndex];
	}
	const home = 'Home'.split('');

	return (
		<div>
			<Header />
			{selectedData.map((item) => (
				<div key={item.id} className="px-clamp">
					<div className="flex justify-between items-center">
						<h3 className="font-genos text-[32px] underline  font-semibold ">{item.name} </h3>
						<Link to={'/'}>
							<TextShift>
								<h3 className="font-gruppo text-[32px]  ">
									{home.map((letter, index) => (
										<TextBounce key={index}>
											<span className="hover:text-[#8f95d3]">{letter}</span>
										</TextBounce>
									))}
								</h3>
							</TextShift>
						</Link>
					</div>
					<div>
						<p className="font-genos text-[24px]">{item.description}</p>
					</div>
					<div className="flex items-center justify-between pt-[40px]">
						{item.liens.github ? (
							<Link
								to={item.liens.github}
								target="blank"
								className="font-gruppo text-[32px] hover:text-[#8f95d3] underline decoration-1">
								Github repo
							</Link>
						) : (
							''
						)}
						<Link
							to={item.liens.site}
							target="blank"
							className="font-gruppo text-[32px] hover:text-[#8f95d3] underline decoration-1">
							Site
						</Link>
					</div>

					<div className={` md:h-[300px]  m-auto text-center mt-5 `}>
						{item.tag.map((tags, index) => (
							<button
								key={index}
								className={`btn relative inline-block  rounded-3xl font-gruppo font-bold uppercase group py-3 px-10 my-5 ${getRandomPadding()}`}>
								<span className="absolute rounded-3xl inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
								<span className="absolute rounded-3xl inset-0 w-full h-full bg-[#f4fcff] border-2 border-black "></span>
								<span className="relative rounded-3xl text-black ">{tags}</span>
							</button>
						))}
					</div>
				</div>
			))}
			<Footer />
		</div>
	);
}

export default StackPage;
