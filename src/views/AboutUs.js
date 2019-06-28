import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="12">
              <p>Assalamualaikum.</p>
              <p>Ini adalah aplikasi waktu solat Malaysia.</p>
              <p>Data adalah daripada JAKIM.</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AboutUs;
