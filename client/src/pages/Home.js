import React from "react";
import { Row, Col } from "react-bootstrap";

import UserData from "../components/organisms/UserData";

import Navbar1 from "../components/organisms/Navbar1";
import Searchbar from "../components/organisms/Searrchbar";
import Footer from "../components/organisms/Footer";
import Slidepagination from "../components/Molecules/Slidepagination";

function App() {
	return (
		<div className="App">
			<Navbar1 />
			<Row className="background px-3 txt-light">
				<Col lg={10} className="mx-auto text-light py-2">
					<h3 className="">Top Jobs</h3>
				</Col>
			</Row>
			<br /> <br />
			<Searchbar />
			<br />
			<UserData className="mb-5 " />
			<Slidepagination />
			<Footer />
		</div>
	);
}

export default App;
