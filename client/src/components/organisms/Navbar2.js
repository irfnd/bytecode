import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";


function Navbar2() {
	return (
          <Navbar bg="white" expand="lg">
            <Container>
              {/* <Col lg={9} className="mx-auto"> */}
              <img
                className="navbar-brand "
                src={logo}
                alt=""
                width={100}
                height={45}
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto "
                  style={{ maxHeight: "0px" }}
                  navbarScroll
                />
                <Button variant="outline-primary button-daftar mx-2">
                  Daftar
                </Button>
                <Button variant="outline-primary button-masuk mx-2">
                  Masuk
                </Button>
              </Navbar.Collapse>
              {/* </Col> */}
            </Container>
          </Navbar>
	);
}

export default Navbar2;