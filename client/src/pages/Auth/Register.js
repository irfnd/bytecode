import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";

import FormRegister from '../../components/organisms/FormRegister'

const login = () => {

  return (
    <div>
      <Card>
        <Card.Body className="mt-0 mb-0">
          <Container>
            <Row>
              <Col lg={12}>
                <FormRegister />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default login;