import React, { useEffect, useRef, useState } from 'react';
import Card from '../Components/Card';
import data from '../Data/data';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<div className=" max-w-[625px]  m-auto flex justify-center flex-wrap gap-[20px]">
				{data.map((item) => (
					<Link key={item.id} to={`/stack/${item.id}`}>
						<Card stack={item.stack} />
					</Link>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default Home;
