import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./assets/styles/GlobalStyles";

import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';

// pages
import LandingPage from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Chat from "./pages/Chat";

import "./Style/adi.css"; // CSS
import "./Style/HomeStyles.css"; // CSS
import EmployeeProfile from "./pages/EmpProfile";
import EmployeeEdit from "./pages/EmpEdit";
import CompanyProfile from "./pages/ComProfile";
import CompanyEdit from "./pages/ComEdit";
import HiringEmployee from "./pages/Hire";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<LandingPage />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="chat" element={<Chat />} />
						<Route path="employed/:userId" element={<EmployeeProfile />} />
						<Route path="employed/edit" element={<EmployeeEdit />} />
						<Route path="company" element={<CompanyProfile />} />
						<Route path="company/edit" element={<CompanyEdit />} />
						<Route path="hire" element={<HiringEmployee />} />
						<Route path="home" element={<Home />} />
						<Route path="landing" element={<LandingPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
