import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center">
        <Container>
          <p>
            <Link to="/terms">Terms</Link> -
            <Link to="/privacy"> Privacy</Link> -
            <a href="mailto:support@thenextdive.com"> Contact US</a>
          </p>
          <p className="text-muted small mb-0">© TheNextDive.com 2018</p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
