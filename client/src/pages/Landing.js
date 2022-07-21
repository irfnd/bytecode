import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Nav,
  Image,
} from "react-bootstrap";
import {  CheckCircle } from "react-bootstrap-icons";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/logo2.png";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
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
        </Row>
        <br /> <br /> <br />
        <Row className="justify-content-md-center ">
          <Col className="col-5 ">
            <h2>Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <Button variant="outline-success mx-2">Start Now</Button>
          </Col>
          <Col className="col-5 ">
            <div className="">
              <div className="imagelayer1" />
              <div className="images " />
              <div className="imagelayer2" />
              <div className="imagelayer3" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center ">
          <Col className="col-5 ">
            <div className="imagelayer1-1" />
            <div className="images-1" />
            <div className="imagelayer2-1" />
            <div className="imagelayer3-1" />
          </Col>
          <Col className="col-5">
            <h2>Kenapa harus mencari tallent di peworld</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center ">
          <Col className="col-5">
            <Row>
              <h2>Skill Tallent</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </Row>
            <Row>
              <Col>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
              </Col>
              <Col>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
                <span>
                <CheckCircle className="d-inline" /> <p className="">skill</p>
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="col-5 ">
            <div className="imagelayer1-2" />
            <div className="images-2" />
            <div className="imagelayer2-2" />
            <div className="imagelayer3-2" />
          </Col>
        </Row>
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
      </Container>
    </div>
  );
}

export default App;
