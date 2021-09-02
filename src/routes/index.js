import React from 'react';
import { Posts } from '../pages';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Posts } />
      </Switch>
    );
  }
}

export default Routes
