import React from 'react';
import { Posts, Home, Details, Favorites } from '../pages';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/posts" component={ Posts } />
        <Route exact path="/posts/favorites" component={ Favorites } />
        <Route exact path="/posts/:id" component={ Details } />
      </Switch>
    );
  }
}

export default Routes