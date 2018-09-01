import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Terms from './terms';
import Privacy from './privacy';
import Centers from './centers';
import AddCenters from './add-centers';
import CenterDetail from './center-detail';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/terms`}
          component={Terms}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/privacy`}
          component={Privacy}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/:city/:id`}
          component={Centers}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/centers/:id/:center`}
          component={CenterDetail}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/centers/update/:id/:key`}
          component={AddCenters}
        />
      </Switch>
    );
  }
}

export default Routes;
