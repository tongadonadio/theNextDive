import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './Routes';

class App extends Component {
  render() {
    const customHistory = createBrowserHistory();
    return (
      <Router history={customHistory} basename={'/TheNextDive'}>
        <Routes />
      </Router>
    );
  }
}

export default App;
