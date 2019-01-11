/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home.container';
import Test from '../containers/Test/Test.container';

export default class Router extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </>
    );
  }
}
