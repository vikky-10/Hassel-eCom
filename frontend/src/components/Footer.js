import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              © Copyright 2020 <strong className="text-dark">Hassel</strong>
              . All Rights Reserved
              <br />
              <small>Made with ❤️ by vikky</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
