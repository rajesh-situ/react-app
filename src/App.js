import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import Router from './router/index.router';
import { history } from './redux/store';

export class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    );
  }
}

export const mapStateToProps = ({ sample }) => ({
  sample
});

export default connect(mapStateToProps, null)(App);
