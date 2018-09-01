import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '../../../img/coral-header1.jpg';

class Header extends Component {
  render() {
    return (
      <div style={sectionStyle}>
        <Link to="/" style={linkStyleIcon}>
          <i className="fa fa-tint fa-2x" />
        </Link>
        &nbsp;&nbsp;
        <Link to="/" style={linkStyleTitle}>
          The Next Dive
        </Link>
      </div>
    );
  }
}

var sectionStyle = {
  width: '100%',
  backgroundImage: `url(${HeaderImage})`,
  padding: '10px'
};

var linkStyleIcon = {
  color: 'white',
  fontSize: '25px',
  textDecoration: 'none'
};

var linkStyleTitle = {
  color: 'white',
  fontSize: '40px',
  textDecoration: 'none',
  paddingBottom: '20px'
};

export default Header;
