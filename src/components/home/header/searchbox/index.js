import React, { Component } from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  Alert
} from 'reactstrap';
import Service from '../../../../services/service';
import './searchbox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: '',
      modal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  listOfSuggestions() {
    return (
      <ListGroup>
        {this.state.suggestions.map((suggestion, i) => (
          <ListGroupItem
            key={i}
            id={suggestion.id}
            className="justify-content-between"
            onClick={() => this.redirect(suggestion.id, suggestion.text)}
            action
          >
            {suggestion.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }

  handleChange(e) {
    var text = e.target.value;
    if (text.length >= 3) {
      Service.getCity(text)
        .then(response => {
          this.setState({ suggestions: response.data.DATA });
        })
        .catch(error => console.log(error));
    } else {
      this.setState({ suggestions: [] });
    }
  }

  redirect(id, city) {
    var name = city.split(',')[0];
    this.props.history.push('/' + name + '/' + id);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col md="9">
            <Input
              className="form-control"
              placeholder="What city do you want to dive in?"
              onChange={this.handleChange}
            />
            {this.state.suggestions && this.listOfSuggestions()}
          </Col>
          <Col md="3">
            <Button color="danger" onClick={this.toggle}>
              Search
            </Button>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            {this.state.suggestions.length > 0 && (
              <div>
                {console.log(this.state.suggestions)}
                <h2>Did you mean?</h2>
                {this.state.suggestions && this.listOfSuggestions()}
              </div>
            )}
            {this.state.suggestions.length === 0 && (
              <div>
                <Alert color="danger">
                  Sorry,we could not find the requested city
                </Alert>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SearchBox;
