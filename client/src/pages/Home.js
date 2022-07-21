import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Popover,
  OverlayTrigger,Pagination
} from "react-bootstrap";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import profil from "../assets/profil.jpg";
import { Bell, Envelope, GeoAlt, Search } from "react-bootstrap-icons";
import UserData from "../components/organism/UserData";
import { Pagination } from "react-bootstrap";

function App() {
  return (
    <div className="App">
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
            ></Nav>
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Body>
                <strong>You have new notification</strong>
              </Popover.Body>
            </Popover>
          }
        >
            <Bell />
        </OverlayTrigger>
            <Envelope className="mx-2 justify-content-center" />
            <img
              className="navbar-profil justify-content-center ms-2 mt-0"
              src={profil}
              alt=""
              width={25}
              height={25}
            />
          </Navbar.Collapse>
          {/* </Col> */}
        </Container>
      </Navbar>
      <Row className="background px-3 txt-light">
        <Col lg={10} className="mx-auto text-light py-2">
          <h3 className="">Top Jobs</h3>
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col lg={9} className="mx-auto  bg-light">
          <Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
            <Form className=" outline-none">
              <Form.Control
                type="search"
                placeholder="Search"
                className="bg-transparent border-0 mx-3"
                aria-label="Search"
              />
            </Form>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Search className="mx-3" />
              <NavDropdown title="Sort" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">filter</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">filter</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">filter</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-primary button-masuk mx-2">Search</Button>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <br />
      <UserData className="mb-5 " />
      <div className="pagination justify-content-center mt-5 mb-5">
        <Pagination.Prev />
        <Pagination.Item className="pagination mx-1">1</Pagination.Item>
        <Pagination.Item className="pagination mx-1">2</Pagination.Item>
        <Pagination.Item className="pagination mx-1">3</Pagination.Item>
        <Pagination.Item className="pagination mx-1">4</Pagination.Item>
        <Pagination.Item className="pagination mx-1">5</Pagination.Item>
        <Pagination.Next />
      </div>
      <Row className="bg ">
        <Col lg={10} className="mx-auto mt-5">
          <Image src={logo2} height={50} className="mt-3 mb-3" />
          <p className="mb-5">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <hr />
          <Row>
            <Navbar>
              <p>2020 Pewworld. All right reserved</p>
              <Navbar.Collapse className="footerlink justify-content-end">
                <p className="mx-5">Telepon</p>
                <p>Email</p>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;