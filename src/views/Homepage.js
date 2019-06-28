import React, { Component } from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import moment from "moment";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: "h:mm A",
      prayerTimes: {
        imsak: "2019-06-29 05:44",
        subuh: "2019-06-29 05:44",
        syuruk: "2019-06-29 07:08",
        zohor: "2019-06-29 13:17",
        asar: "2019-06-29 16:44",
        maghrib: "2019-06-29 19:26",
        isyak: "2019-06-29 20:42"
      }
    };

    this.refreshEvent = this.refreshEvent.bind(this);
  }

  refreshEvent = event => {
    alert("REFRESH EXECUTED");
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="12">
              <div className="putmiddle">
                <h5></h5>
              </div>

              <div>
                <div>Kawasan: </div>
                <div>Last update: </div>
              </div>

              <Table striped size="sm">
                <thead>
                  <tr>
                    <th>Waktu</th>
                    <th>Masa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Imsak</td>
                    <td>
                      {moment(this.state.prayerTimes.imsak).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Subuh</td>
                    <td>
                      {moment(this.state.prayerTimes.subuh).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Syuruk</td>
                    <td>
                      {moment(this.state.prayerTimes.syuruk).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Zohor</td>
                    <td>
                      {moment(this.state.prayerTimes.zohor).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Asar</td>
                    <td>
                      {moment(this.state.prayerTimes.asar).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Maghrib</td>
                    <td>
                      {moment(this.state.prayerTimes.maghrib).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Isyak</td>
                    <td>
                      {moment(this.state.prayerTimes.isyak).format(
                        this.state.timeFormat
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="putmiddle">
                <Button color="primary" onClick={this.refreshEvent}>
                  Refresh
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Homepage;
