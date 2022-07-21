import React from 'react';
import { Card, Container } from "react-bootstrap";

import FormChat from '../components/organisms/FormChat'

const chat = () => {

  return (
    <div>
      <Card>
        <Card.Body className="mt-0 mb-0">
          <Container fluid>
              <FormChat />
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default chat;