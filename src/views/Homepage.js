import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button>
            </div>
        )
    }
}

export default Homepage;
