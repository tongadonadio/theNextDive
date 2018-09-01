import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Footer from '../../share/footer';
import Spot1 from '../../../img/div1.jpg';
import Spot2 from '../../../img/div2.jpg';
import Spot3 from '../../../img/div3.jpg';
import './body.css';

class Body extends Component {
  render() {
    return (
      <Container className="body-container">
        <Row className="no-gutters body-home">
          <Col lg="6">
            <img className="img-fluid" src={Spot1} alt="" />
          </Col>
          <Col lg="6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <Container className="my-auto text-lg-left">
                  <h4 className="text-white">Search a Diving Spot</h4>
                  <p className="mb-0 text-white-50">
                    Reef dive? Wreck dive? TheNextDive.com is the only webiste
                    that allows you to easily search through the best diving
                    spots in your area. Select your spot for your next dive
                    among the most exciting places acording to your level.
                  </p>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters body-home">
          <Col lg="6">
            <img className="img-fluid" src={Spot2} alt="" />
          </Col>
          <Col lg="6" className="order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <Container className="my-auto text-lg-left">
                  <h4 className="text-white">Pick a diving boat</h4>
                  <p className="mb-0 text-white-50">
                    See all the options you have in one site and pick the best
                    boat that takes you there. See costs, times, gear you need
                    to rent and the reviews and opinions of divers for the best
                    experience.
                  </p>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters body-home">
          <Col lg="6">
            <img className="img-fluid" src={Spot3} alt="" />
          </Col>
          <Col lg="6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <Container className="my-auto text-lg-left">
                  <h4 className="text-white">Book your dive</h4>
                  <p className="mb-0 text-white-50">
                    Effortlessly select all the extra gear you need to rent, pay
                    for your trip and receive the confirmation of the boat for
                    your next dive in seconds. It's never been easier and more
                    exciting to book your next dive.
                  </p>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters body-home footer">
          <Col lg={{ size: '10', offset: 1 }}>
            <div className="text-center">
              <Container>
                <h4 className="text-white">
                  Ultra easy to book a trip. Super impressive.
                </h4>
              </Container>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Body;
