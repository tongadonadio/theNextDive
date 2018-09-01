import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './header.css';
import SearchBox from './searchbox/index';
import YouTube from 'react-youtube';

class Header extends Component {
  state = {
    opacity: 1
  };

  _onReady = event => {
    //alert('opa');
    this.setState({ opacity: 0 });
  };

  render() {
    const opts = {
      height: '758.8125',
      width: '1349',
      playerVars: {
        showinfo: 0,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        loop: 1,
        enablejsapi: 1,
        origin: 'https%3A%2F%2Fthenextdive.com',
        widgetid: 1,
        autoplay: 1
      }
    };

    return (
      <div>
        <div className="header-home">
          <div
            className="video-cover"
            style={{
              opacity: this.state.opacity,
              transition: 'opacity 3s ease'
            }}
          />
          <div className="video-frame">
            <YouTube videoId="PHsGaBYYvxc" opts={opts} onPlay={this._onReady} />
          </div>
          <div className="title-home">
            <h1> THE POOL IS OPEN </h1>
            <h3> Search and book your next dive anywhere in the world </h3>
          </div>
          <Col
            md={{ size: 6, offset: 3 }}
            xl="5"
            className="mx-auto search-home"
          >
            <SearchBox history={this.props.history} />
          </Col>
        </div>
      </div>
    );
  }
}

export default Header;
