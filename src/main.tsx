import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './components/about/About';
import Error from './components/Error';
import Navbar from './components/navbar/Navbar';
import Projects from './components/myworks/Projects';
import Booksynation from './components/myworks/details/Booksynation';
import Recycler from './components/myworks/details/Recycler';
import Whitelist from './components/myworks/details/Whitelist';
import Datagrades from './components/myworks/details/Datagrades';
import Altruwiz from './components/myworks/details/Altruwiz';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/booksynation' element={<Booksynation />} />
				<Route path='/recycl3r' element={<Recycler />} />
				<Route path='/whitelist' element={<Whitelist />} />
				<Route path='/datagrades' element={<Datagrades />} />
				<Route path='/altruwiz' element={<Altruwiz />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
