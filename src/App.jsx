import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import StackPage from './Pages/StackPage';
import React from 'react';
import PageTransition from './Utils/pageTransition';

function App() {
	const location = useLocation();

	return (
		<PageTransition>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path="/stack/:id" element={<StackPage />} />
			</Routes>
		</PageTransition>
	);
}

export default App;
