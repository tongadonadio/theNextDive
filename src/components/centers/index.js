import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../share/header-centers';
import Footer from '../share/footer';
import Card from './card';
import Map from './map';
import Service from '../../services/service';
import DetailCenter from './detail-center';
import './centers.css';

class Centers extends Component {
  constructor(props) {
    super(props);

    this.refModal = React.createRef();
    this.state = {
      id: this.props.match.params.id,
      centers: [],
      city: '',
      map: ''
    };

    this.loadCenters = this.loadCenters.bind(this);
    this.responseDescompose = this.responseDescompose.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.loadCenters();
  }

  loadCenters() {
    Service.getCentersByCity(this.state.id)
      .then(response => {
        this.setState({
          centers: this.responseDescompose(response.data.DATA.centers),
          city: response.data.DATA.city,
          map: response.data.DATA.map
        });
      })
      .catch(error => console.log(error));
  }

  responseDescompose(response) {
    if (response) {
      var keys = Object.keys(response);
      var centersAux = [];
      keys.forEach(element => {
        centersAux.push(response[element]);
      });
      return centersAux;
    }
    return [];
  }

  toggleModal(center, idCenter) {
    var name = center.name.replace(/[^a-zA-Z ]/g, '');
    name = name.replace(/\s/g, '');
    var id = idCenter ? idCenter : center.id;
    this.props.history.push('/centers/' + id + '/' + name);
    //this.refModal.current.toggle(center);
  }

  render() {
    return (
      <div>
        <Header />
        <DetailCenter ref={this.refModal} id={this.state.id} />
        <Col md={{ size: 10, offset: 1 }} className="container-centers">
          <Row>
            <h2 className="title-center">{this.state.city.title}</h2>
          </Row>
          <Row>
            {this.state.centers &&
              this.state.centers.map((center, i) => (
                <Card
                  key={i}
                  id={center.id}
                  center={center}
                  toggleModal={r => this.toggleModal(r, center.id)}
                />
              ))}
          </Row>
          {this.state.map &&
            this.state.centers && (
              <Map
                map={this.state.map}
                centers={this.state.centers}
                height="400px"
                toggleModal={this.toggleModal}
              />
            )}
        </Col>
        <Footer />
      </div>
    );
  }
}

export default Centers;
