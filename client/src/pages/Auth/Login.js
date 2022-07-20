import React from 'react';
import { Card, Container } from "react-bootstrap";

import FormLogin from '../../components/organisms/FormLogin'

const login = () => {

  return (
    <div>
      <Card>
        <Card.Body className="mt-0 mb-0">
          <Container>
              <FormLogin />
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default login;