import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home.container';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}
