import React, { Component } from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';

class Homepage extends Component {

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
                            <div className="putmiddle">
                                <h5>Waktu Solat Malaysia (JAKIM)</h5>
                            </div>

                            <div>
                                <div>Kawasan: </div>
                                <div>Last update: </div>
                            </div>

                            <Table striped size="sm" dark>
                                <thead>
                                    <tr>
                                        <th>Waktu</th>
                                        <th>Masa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Imsak</td>
                                        <td>6:00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Subuh</td>
                                        <td>6:10 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Imsak</td>
                                        <td>6:00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Syuruk</td>
                                        <td>7.27 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Zohor</td>
                                        <td>1:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Asar</td>
                                        <td>4:50 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Maghrib</td>
                                        <td>7:29 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Isyak</td>
                                        <td>8:40 PM</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="putmiddle">
                                <Button color="primary">Tukar Kawasan</Button>{' '}
                                <Button color="primary">Refresh</Button>
                            </div>
                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Homepage;
