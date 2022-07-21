import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  Nav,
  Navbar,
} from "react-bootstrap";
import profil from "../../files/profil.jpg";
import { Bell, Envelope, GeoAlt } from "react-bootstrap-icons";

function App() {
  return (
    // <div className="App">
    <Col lg={9} className=" mx-auto shadow-lg ">
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={3}>
                    <Card.Img
                      className="profilpict"
                      src={profil}
                      circleRounded
                      alt=""
                      height={150}
                    />
                  </Col>
                  <Col lg={9} className="">
                    <h4>Sammy</h4>
                    <p>Web Developer</p>
                    <Row>
                      <Col lg={1}>
                        <GeoAlt />
                      </Col>
                      <Col>
                        <p>indonesia</p>
                      </Col>
                    </Row>
                    <Button variant="warning mx-1">Java</Button>
                    <Button variant="warning mx-1">Php</Button>
                    <Button variant="warning mx-1">Javascript</Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} className="justify-content-center mx-auto">
                <Row className="">
                  <Button variant="btn button-profil mt-5 text-light">
                    Lihat Profil
                  </Button>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={3}>
                    <Card.Img
                      className="profilpict"
                      src={profil}
                      alt=""
                      height={150}
                    />
                  </Col>
                  <Col lg={9} className="">
                    <h4>Sammy</h4>
                    <p>Web Developer</p>
                    <Row>
                      <Col lg={1}>
                        <GeoAlt />
                      </Col>
                      <Col>
                        <p>indonesia</p>
                      </Col>
                    </Row>
                    <Button variant="warning mx-1">Java</Button>
                    <Button variant="warning mx-1">Php</Button>
                    <Button variant="warning mx-1">Javascript</Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} className="justify-content-center mx-auto">
                <Row className="">
                  <Button variant="btn button-profil mt-5 text-light">
                    Lihat Profil
                  </Button>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={3}>
                    <Card.Img
                      className="profilpict"
                      src={profil}
                      alt=""
                      height={150}
                    />
                  </Col>
                  <Col lg={9} className="">
                    <h4>Sammy</h4>
                    <p>Web Developer</p>
                    <Row>
                      <Col lg={1}>
                        <GeoAlt />
                      </Col>
                      <Col>
                        <p>indonesia</p>
                      </Col>
                    </Row>
                    <Button variant="warning mx-1">Java</Button>
                    <Button variant="warning mx-1">Php</Button>
                    <Button variant="warning mx-1">Javascript</Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} className="justify-content-center mx-auto">
                <Row className="">
                  <Button variant="btn button-profil mt-5 text-light">
                    Lihat Profil
                  </Button>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={3}>
                    <Card.Img
                      className="profilpict"
                      src={profil}
                      alt=""
                      height={150}
                    />
                  </Col>
                  <Col lg={9} className="">
                    <h4>Sammy</h4>
                    <p>Web Developer</p>
                    <Row>
                      <Col lg={1}>
                        <GeoAlt />
                      </Col>
                      <Col>
                        <p>indonesia</p>
                      </Col>
                    </Row>
                    <Button variant="warning mx-1">Java</Button>
                    <Button variant="warning mx-1">Php</Button>
                    <Button variant="warning mx-1">Javascript</Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} className="justify-content-center mx-auto">
                <Row className="">
                  <Button variant="btn button-profil mt-5 text-light">
                    Lihat Profil
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
    // </div>
  );
}

export default App;