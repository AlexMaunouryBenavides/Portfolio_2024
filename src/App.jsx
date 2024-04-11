import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';

import React from 'react';
import PageTransition from './Utils/pageTransition';

function App() {
	const location = useLocation();

	return (
		<PageTransition>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
			</Routes>
		</PageTransition>
	);
}

export default App;
