import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
                        <Col xs="1"></Col>
                        <Col xs="10">
                            <p>Assalamualaikum.</p>
                            <p>Ini adalah aplikasi waktu solat Malaysia.</p>
                            <p>Data adalah daripada JAKIM.</p>
                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AboutUs;
