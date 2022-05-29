import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './components/Error';
import Booksynation from './components/myworks/details/Booksynation';
import Recycler from './components/myworks/details/Recycler';
import Whitelist from './components/myworks/details/Whitelist';
import Datagrades from './components/myworks/details/Datagrades';
import Altruwiz from './components/myworks/details/Altruwiz';
import Tingbits from './components/myworks/details/Tingbits';
import Inteletraf from './components/myworks/details/Inteletraf';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/booksynation' element={<Booksynation />} />
				<Route path='/recycl3r' element={<Recycler />} />
				<Route path='/whitelist' element={<Whitelist />} />
				<Route path='/datagrades' element={<Datagrades />} />
				<Route path='/inteletraf' element={<Inteletraf />} />
				<Route path='/altruwiz' element={<Altruwiz />} />
				<Route path='/tingbits' element={<Tingbits />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
