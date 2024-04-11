import React from 'react';

import Footer from '../Components/Footer';

import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

function Home() {
	return (
		<div>
			<section className="lg:h-screen h-full">
				<Header />
				<div className="max-w-5xl m-auto">
					<Hero />
				</div>
			</section>

			<section id="projects" className="max-w-5xl m-auto">
				<Projects />
			</section>
			<section className="max-w-5xl m-auto py-10" id="contact">
				<Contact />
			</section>

			<Footer />
		</div>
	);
}

export default Home;
