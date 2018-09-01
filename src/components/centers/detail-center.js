import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  Label,
  Input,
  Alert
} from 'reactstrap';
import Service from '../../services/service';
import Map from './map';

class DetailCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      modal: false,
      center: '',
      message: '',
      name: '',
      email: '',
      showMessageSuccess: '',
      showMessageError: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  toggle(center) {
    if (center) {
      this.setState({ center: center });
    }
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  sendMessage() {
    Service.sendMessage(
      this.state.id,
      this.state.name,
      this.state.email,
      this.state.message
    )
      .then(response => {
        this.showMessage(response.data.MSG);
      })
      .catch(error => this.showMessage('ERROR'));
  }

  showMessage(message) {
    if (message === 'OK') {
      this.setState({
        showMessageSuccess: 'OK',
        showMessageError: ''
      });
    } else {
      this.setState({
        showMessageSuccess: '',
        showMessageError: 'Error'
      });
    }
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.state.center.name}
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="4">
                <img
                  src={this.state.center.image}
                  alt=""
                  className="image-detail"
                />
              </Col>
              <Col md="8">
                <p>{this.state.center.description}</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <small className="text-muted">★ ★ ★ ★ ★</small>
              </Col>
            </Row>
            {this.state.center && (
              <Map
                centers={[this.state.center]}
                map={{
                  latitude: parseFloat(this.state.center.latitude),
                  longitude: parseFloat(this.state.center.longitude)
                }}
                height="160px"
              />
            )}
            <Form>
              <Row>
                <Col md="6">
                  <Label>Name :</Label>
                  <Input
                    placeholder="Your Name"
                    onChange={this.handleChange}
                    name="name"
                  />
                </Col>
                <Col md="6">
                  <Label>Email :</Label>
                  <Input
                    placeholder="Your Email"
                    onChange={this.handleChange}
                    name="email"
                  />
                </Col>
                <Col md="12">
                  <Label>Message :</Label>
                  <Input
                    type="textarea"
                    placeholder="Enter your message"
                    onChange={this.handleChange}
                    name="message"
                  />
                </Col>
              </Row>
            </Form>
            {this.state.showMessageSuccess && (
              <Alert className="alert-message" color="success">
                Message sent successfully!
              </Alert>
            )}
            {this.state.showMessageError && (
              <Alert className="alert-message" color="danger">
                There was a problem sending the message!
              </Alert>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.sendMessage}>
              Contact
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DetailCenter;
