import React, { Component } from 'react';
import { Container, Col, Card, CardBody, Row, Button } from 'reactstrap';
import Header from '../share/header-centers';
import Footer from '../share/footer';
import Service from '../../services/service';
import Map from './map';
import Contact from './contact';
import './center-detail.css';

class CenterDetail extends Component {
  constructor(props) {
    super(props);

    this.refModal = React.createRef();
    this.state = {
      id: this.props.match.params.id,
      city: '',
      country: '',
      streetNumber: '',
      addressState: '',
      addressStreet: '',
      description: '',
      rating: '',
      name: '',
      latitude: '',
      longitude: '',
      image: '',
      address: '',
      showErroMessage: ''
    };

    this.loadCenter();
  }

  loadCenter = () => {
    Service.getCenter(this.state.id)
      .then(response => {
        this.setState({
          name: response.data.DATA.name,
          latitude: response.data.DATA.latitude,
          longitude: response.data.DATA.longitude,
          image: response.data.DATA.image,
          address: response.data.DATA.addrStreet,
          city: response.data.DATA.addrCity,
          country: response.data.DATA.addrCountry,
          streetNumber: response.data.DATA.addrNumber,
          addressState: response.data.DATA.addrState,
          addressStreet: response.data.DATA.addrStreet,
          addressOffice: response.data.DATA.addrOffice,
          description: response.data.DATA.description,
          rating: response.data.DATA.rating
        });
      })
      .catch(error => this.setState({ showErroMessage: 'ERROR' }));
  };

  toggleModal = center => {
    this.refModal.current.toggle(center);
  };

  render() {
    return (
      <div className="body-center-detail">
        <Header />
        <Container className="container-center-detail">
          <Col md={{ size: 10, offset: 1 }}>
            <Card style={{ minHeight: 'calc(100vh - 150px)' }}>
              {!this.state.showErroMessage && (
                <CardBody>
                  <Row>
                    <Col md="8">
                      <Row>
                        <Col md="3">
                          <img
                            src={this.state.image}
                            alt=""
                            style={{ width: '100%' }}
                          />
                        </Col>
                        <Col md="9">
                          <h3>{this.state.name}</h3>
                          <h5>
                            Address: {this.state.address},{' '}
                            {this.state.streetNumber},{' '}
                            {this.state.addressOffice}, {this.state.city},{' '}
                            {this.state.addressState}, {this.state.country}
                          </h5>
                          <h3>
                            <small className="text-muted">★ ★ ★ ★ ★</small>
                          </h3>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="4">
                      <Map
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        height="160px"
                      />
                    </Col>
                  </Row>
                  {this.state.description && (
                    <Row style={{ marginTop: '50px' }}>
                      <Col md="12" style={{ textAlign: 'center' }}>
                        <h4>About {this.state.name}</h4>
                        <h5>{this.state.description}</h5>
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col
                      md="12"
                      style={{
                        textAlign: 'center',
                        marginTop: '40px'
                      }}
                    >
                      <Button
                        color="primary"
                        onClick={() =>
                          this.toggleModal({
                            name: this.state.name,
                            image: this.state.image,
                            description: this.state.description
                          })
                        }
                      >
                        Contact the center
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              )}
              {this.state.showErroMessage === 'ERROR' && (
                <CardBody className="message-error">
                  <h4> Error, we could not find the center! </h4>
                  <h5>Try again or contact us</h5>
                </CardBody>
              )}
            </Card>
          </Col>
          <Contact ref={this.refModal} id={this.state.id} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default CenterDetail;
