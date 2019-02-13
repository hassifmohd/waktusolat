import React, { Component } from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asar: '16:37:00',
            dhuhr: '13:18:00',
            fajr: '05:58:00',
            imsak: '05:48:00',
            isha: '20:29:00',
            maghrib: '19:18:00',
            syuruk: '07:15:00',
            date: '14-Feb-2019',
            hijri: '1440-06-09',
            area: 'Kuala Selangor',
            areaCode: 'SGR03',
            lastUpdate: '2019-02-14 20:00:00'
        };

        this.refreshEvent = this.refreshEvent.bind(this);
    }

    refreshEvent = (event) => {
        alert('REFRESH EXECUTED');
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="1"></Col>
                        <Col xs="10">
                            <div>
                                <div>Tarikh: {this.state.hijri}</div>
                                <div>Kawasan: {this.state.area}</div>
                                <div>Last update: {this.state.lastUpdate}</div>
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
                                        <td>{this.state.imsak}</td>
                                    </tr>
                                    <tr>
                                        <td>Subuh</td>
                                        <td>{this.state.fajr}</td>
                                    </tr>
                                    <tr>
                                        <td>Syuruk</td>
                                        <td>{this.state.syuruk}</td>
                                    </tr>
                                    <tr>
                                        <td>Zohor</td>
                                        <td>{this.state.dhuhr}</td>
                                    </tr>
                                    <tr>
                                        <td>Asar</td>
                                        <td>{this.state.asar}</td>
                                    </tr>
                                    <tr>
                                        <td>Maghrib</td>
                                        <td>{this.state.maghrib}</td>
                                    </tr>
                                    <tr>
                                        <td>Isyak</td>
                                        <td>{this.state.isha}</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="putmiddle">
                                <Button color="primary" onClick={this.refreshEvent}>Refresh</Button>
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
