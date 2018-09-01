import React, { Component } from 'react';
import Header from './header';
import Body from './body';

class Home extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Body />
      </div>
    );
  }
}

export default Home;
