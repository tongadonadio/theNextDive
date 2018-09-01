import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Label,
  Form,
  Card,
  CardBody,
  Button
} from 'reactstrap';
import Header from '../share/header';
import Footer from '../share/footer';
import './add-centers.css';
import imageDefault from '../../img/center-default1.jpg';
import Map from './map';
import Service from '../../services/service';

class AddCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: '',
      id: this.props.match.params.id,
      key: this.props.match.params.key,
      extSource: '',
      extId: '',
      confirm: '',
      imgCenter: '',
      diveCenter: '',
      email: '',
      phone: '',
      web: '',
      tripAdvisor: '',
      street: '',
      streetNo: '',
      apt: '',
      city: '',
      state: '',
      country: '',
      latitude: '',
      longitude: ''
    };
  }

  componentWillMount() {
    Service.getBasicCenter(this.state.id, this.state.key)
      .then(response => {
        if (response.data.CODE === 0) {
          this.setState({
            city: response.data.DATA.addrCity,
            country: response.data.DATA.addrCountry,
            streetNo: response.data.DATA.addrNumber,
            apt: response.data.DATA.addrOffice,
            state: response.data.DATA.addrState,
            street: response.data.DATA.addrStreet,
            confirm: response.data.DATA.confirm,
            email: response.data.DATA.email,
            extId: response.data.DATA.extId,
            extSource: response.data.DATA.extSource,
            id: response.data.DATA.id,
            imgCenter: response.data.DATA.image,
            latitude: response.data.DATA.latitude,
            longitude: response.data.DATA.longitude,
            diveCenter: response.data.DATA.name,
            phone: response.data.DATA.phone,
            tripAdvisor: response.data.DATA.tripAdvisor,
            web: response.data.DATA.web
          });
        } else {
          this.showMessage();
        }
      })
      .catch(error => this.showMessage(error));
  }

  showMessage = message => {
    if (message === 'OK') {
      this.setState({ showMessage: 'OK' });
    } else {
      this.setState({ showMessage: 'ERROR' });
    }
  };

  handleChange = e => {
    if (e.target.value) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  updatePosition = (lat, lng) => {
    this.setState({ latitude: lat, longitude: lng });
  };

  imageUpload = e => {
    const file = e.target.files[0];
    Service.addImage(this.state.id, this.state.key, file)
      .then(response => {
        if (response.data.CODE === 0) {
          this.setState({ imgCenter: response.data.DATA });
        } else {
          this.showMessage('ERROR');
        }
      })
      .catch(error => this.showMessage('ERROR'));
  };

  addCenter = () => {
    Service.addCenter(
      this.state.id,
      this.state.extSource,
      this.state.extId,
      this.state.diveCenter,
      this.state.email,
      this.state.phone,
      this.state.web,
      this.state.imgCenter,
      this.state.street,
      this.state.streetNo,
      this.state.apt,
      this.state.city,
      this.state.state,
      this.state.country,
      this.state.tripAdvisor,
      this.state.confirm,
      this.state.key,
      this.state.latitude,
      this.state.longitude
    )
      .then(response => {
        if (response.data.CODE === 0) {
          this.showMessage('OK');
        } else {
          this.showMessage('ERROR');
        }
      })
      .catch(error => this.showMessage(error));
  };

  render() {
    return (
      <div className="body-add-centers">
        <Header />
        <Container className="container-add-centers">
          <Col md={{ size: 10, offset: 1 }}>
            <Card>
              {!this.state.showMessage && (
                <CardBody>
                  <div className="title-add-centers">
                    <h1>Add your center</h1>
                  </div>
                  <Row>
                    <Col md="6">
                      <Form>
                        <Row>
                          <Col md="12">
                            <Label>Dive center :</Label>
                            <Input
                              placeholder="Full Name"
                              onChange={this.handleChange}
                              name="diveCenter"
                              value={this.state.diveCenter}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Email :</Label>
                            <Input
                              placeholder="Email"
                              onChange={this.handleChange}
                              name="email"
                              value={this.state.email}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Phone :</Label>
                            <Input
                              placeholder="Phone"
                              onChange={this.handleChange}
                              name="phone"
                              value={this.state.phone}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Web :</Label>
                            <Input
                              placeholder="Web"
                              onChange={this.handleChange}
                              name="web"
                              value={this.state.web}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Trip advisor :</Label>
                            <Input
                              placeholder="Trip Advisor URL"
                              onChange={this.handleChange}
                              name="tripAdvisor"
                              value={this.state.tripAdvisor}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Street :</Label>
                            <Input
                              placeholder="Street"
                              onChange={this.handleChange}
                              name="street"
                              value={this.state.street}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Street No :</Label>
                            <Input
                              placeholder="Street number"
                              onChange={this.handleChange}
                              name="streetNo"
                              value={this.state.streetNo}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Unit/Apt :</Label>
                            <Input
                              placeholder="Apartment, suite, unit, building, etc."
                              onChange={this.handleChange}
                              name="apt"
                              value={this.state.apt}
                            />
                          </Col>
                          <Col md="12">
                            <Label>City :</Label>
                            <Input
                              placeholder="City"
                              onChange={this.handleChange}
                              name="city"
                              value={this.state.city}
                            />
                          </Col>
                          <Col md="12">
                            <Label>State :</Label>
                            <Input
                              placeholder="State"
                              onChange={this.handleChange}
                              name="state"
                              value={this.state.state}
                            />
                          </Col>
                          <Col md="12">
                            <Label>Country :</Label>
                            <Input
                              placeholder="Country"
                              onChange={this.handleChange}
                              name="country"
                              value={this.state.country}
                            />
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    <Col md="6">
                      <div className="image-add-centers">
                        <Label for="file-input">
                          {this.state.imgCenter && (
                            <img src={this.state.imgCenter} alt="" />
                          )}
                          {!this.state.imgCenter && (
                            <img src={imageDefault} alt="" />
                          )}
                        </Label>
                        <Input
                          id="file-input"
                          type="file"
                          onChange={this.imageUpload}
                        />
                      </div>
                      <h4>Drag the pin to your shop location</h4>
                      <Map
                        updatePosition={this.updatePosition}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" className="button-add">
                      <Button
                        color="primary"
                        className="text-center"
                        onClick={this.addCenter}
                      >
                        Add your center
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              )}
              {this.state.showMessage === 'OK' && (
                <CardBody className="message-succesfull">
                  <h1> Congratulations! </h1>
                  <h4>Your dive center has been verified</h4>
                  <h4>
                    We will be in contact with you soon with additional
                    information
                  </h4>
                </CardBody>
              )}
              {this.state.showMessage === 'ERROR' && (
                <CardBody className="message-error">
                  <h4> Error, something was wrong! </h4>
                  <h5>Try again or contact us</h5>
                </CardBody>
              )}
            </Card>
          </Col>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default AddCenter;
