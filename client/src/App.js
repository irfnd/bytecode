import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './assets/styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// pages
import LandingPage from './pages/Landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element = {<LandingPage />} />
						<Route path = 'login' element = {<Login />} />
						<Route path = 'register' element = {<Register />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
