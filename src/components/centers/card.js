import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Service from '../../services/service';
import './centers.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {}
    };

    this.loadCenter = this.loadCenter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadCenter();
  }

  loadCenter() {
    Service.getCenter(this.props.id)
      .then(response => {
        this.setState({
          center: response.data.DATA
        });
      })
      .catch(error => console.log(error));
  }

  handleClick() {
    this.props.toggleModal(this.state.center);
  }

  render() {
    return (
      <Col lg="3" md="4" className="container-card">
        <div className="card h-100">
          <img
            className="card-img-top image-card"
            src={this.state.center.image}
            onClick={() => this.handleClick()}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.center.name}</h5>
            <p className="card-text">{this.state.center.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">★ ★ ★ ★ ★</small>
          </div>
        </div>
      </Col>
    );
  }
}

export default Card;
