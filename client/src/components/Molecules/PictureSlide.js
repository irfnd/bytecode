import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthStyles from '../../assets/styles/AuthStyles';

import background from '../../assets/icons/Authpict.png';
import logo from '../../assets/icons/icon1.png';

function Picture() {
  return (
    <>
      <AuthStyles />
      <Col lg="6" md="4" className="position-relative d-none d-md-block p-0">
        <img src={background} alt="background" className="w-100 full banner" />
        <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </Col>
    </>
  );
}

export default Picture;