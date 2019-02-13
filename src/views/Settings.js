import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Settings extends Component {

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
                            <div>
                                <Form>
                                    <FormGroup row>
                                        <Label for="state" sm={4}>Negeri</Label>
                                        <Col sm={8}>
                                            <Input type="select" name="state" id="state">
                                                <option value="JHR">Johor</option>
                                                <option value="KDH">Kedah</option>
                                                <option value="KTN">Kelantan</option>
                                                <option value="KTN">Melaka</option>
                                                <option value="NGS">Negeri Sembilan</option>
                                                <option value="PHG">Pahang</option>
                                                <option value="PLS">Perlis</option>
                                                <option value="PNG">Pulau Pinang</option>
                                                <option value="PRK">Perak</option>
                                                <option value="SBH">Sabah</option>
                                                <option value="SGR">Selangor</option>
                                                <option value="SWK">Sarawak</option>
                                                <option value="TRG">Terengganu</option>
                                                <option value="WLY">Wilayah Persekutuan</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="area" sm={4}>Kawasan</Label>
                                        <Col sm={8}>
                                            <Input type="select" name="area" id="area">
                                                <optgroup label="Johor">
                                                    <option value="JHR01">Pulau Aur dan Pulau Pemanggil </option>
                                                    <option value="JHR02">Johor Bharu, Kota Tinggi, Mersing</option>
                                                    <option value="JHR03">Kluang, Pontian</option>
                                                    <option value="JHR04">Batu Pahat, Muar, Segamat, Gemas Johor</option>
                                                </optgroup>
                                                <optgroup label="Kedah">
                                                    <option value="KDH01">Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil)</option>
                                                    <option value="KDH02">Kuala Muda, Yan, Pendang</option>
                                                    <option value="KDH03">Padang Terap, Sik</option>
                                                    <option value="KDH04">Baling</option>
                                                    <option value="KDH05">Bandar Baharu, Kulim</option>
                                                    <option value="KDH06">Langkawi</option>
                                                    <option value="KDH07">Gunung Jerai</option>
                                                </optgroup>
                                                <optgroup label="Kelantan">
                                                    <option value="KTN01">Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku</option>
                                                    <option value="KTN03">Gua Musang (Daerah Galas Dan Bertam), Jeli</option>
                                                </optgroup>
                                                <optgroup label="Melaka">
                                                    <option value="MLK01">SELURUH NEGERI MELAKA</option>
                                                </optgroup>
                                                <optgroup label="Negeri Sembilan">
                                                    <option value="NGS01">Tampin, Jempol</option>
                                                    <option value="NGS02">Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban</option>
                                                </optgroup>
                                                <optgroup label="Pahang">
                                                    <option value="PHG01">Pulau Tioman</option>
                                                    <option value="PHG02">Kuantan, Pekan, Rompin, Muadzam Shah</option>
                                                    <option value="PHG03">Jerantut, Temerloh, Maran, Bera, Chenor, Jengka</option>
                                                    <option value="PHG04">Bentong, Lipis, Raub</option>
                                                    <option value="PHG05">Genting Sempah, Janda Baik, Bukit Tinggi</option>
                                                    <option value="PHG06">Cameron Highlands, Genting Higlands, Bukit Fraser</option>
                                                </optgroup>
                                                <optgroup label="Perlis">
                                                    <option value="PLS01">Kangar, Padang Besar, Arau</option>
                                                </optgroup>
                                                <optgroup label="Pulau Pinang">
                                                    <option value="PNG01">Seluruh Negeri Pulau Pinang</option>
                                                </optgroup>
                                                <optgroup label="Perak">
                                                    <option value="PRK01">Tapah, Slim River, Tanjung Malim</option>
                                                    <option value="PRK02">Kuala Kangsar, Sg. Siput (Daerah Kecil), Ipoh, Batu Gajah, Kampar</option>
                                                    <option value="PRK03">Lenggong, Pengkalan Hulu, Grik</option>
                                                    <option value="PRK04">Temengor, Belum</option>
                                                    <option value="PRK05">Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor</option>
                                                    <option value="PRK06">Selama, Taiping, Bagan Serai, Parit Buntar</option>
                                                    <option value="PRK07">Bukit Larut</option>
                                                </optgroup>
                                                <optgroup label="Sabah">
                                                    <option value="SBH01">Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan, Sukau</option>
                                                    <option value="SBH02">Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat)</option>
                                                    <option value="SBH03">Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau  (Timur)</option>
                                                    <option value="SBH04">Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau (Barat)</option>
                                                    <option value="SBH05">Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat</option>
                                                    <option value="SBH06">Gunung Kinabalu</option>
                                                    <option value="SBH07">Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat</option>
                                                    <option value="SBH08">Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pendalaman (Atas)</option>
                                                    <option value="SBH09">Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston, Bahagian Pendalaman (Bawah)</option>
                                                </optgroup>
                                                <optgroup label="Selangor">
                                                    <option value="SGR01">Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, Rawang, S.Alam</option>
                                                    <option value="SGR02">Kuala Selangor, Sabak Bernam</option>
                                                    <option value="SGR03">Klang, Kuala Langat</option>
                                                </optgroup>
                                                <optgroup label="Sarawak">
                                                    <option value="SWK01">Limbang, Lawas, Sundar, Trusan</option>
                                                    <option value="SWK02">Miri, Niah, Bekenu, Sibuti, Marudi</option>
                                                    <option value="SWK03">Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu</option>
                                                    <option value="SWK04">Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit</option>
                                                    <option value="SWK05">Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai</option>
                                                    <option value="SWK06">Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok</option>
                                                    <option value="SWK07">Serian, Simunjan, Samarahan, Sebuyau, Meludam</option>
                                                    <option value="SWK08">Kuching, Bau, Lundu, Sematan</option>
                                                    <option value="SWK09">Zon Khas (Kampung Patarikan)</option>
                                                </optgroup>
                                                <optgroup label="Terengganu">
                                                    <option value="TRG01">Kuala Terengganu, Marang, Kuala Nerus</option>
                                                    <option value="TRG02">Besut, Setiu</option>
                                                    <option value="TRG03">Hulu Terengganu</option>
                                                    <option value="TRG04">Dungun, Kemaman</option>
                                                </optgroup>
                                                <optgroup label="Wilayah Persekutuan">
                                                    <option value="WLY01">Kuala Lumpur, Putrajaya</option>
                                                    <option value="WLY02">Labuan</option>
                                                </optgroup>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="timeformat" sm={4}>Format jam</Label>
                                        <Col sm={8}>
                                            <Input type="select" name="timeformat" id="timeformat">
                                                <option>09:00 AM</option>
                                                <option>21:00</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>

                            <div className="putmiddle">
                                <Button color="primary">Update</Button>
                            </div>
                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Settings;
