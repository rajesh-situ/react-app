import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import Router from './router/index.router';
import { history } from './redux/store';
import StyleVariableContainer from './styles/variables';
import AppHeader from './components/Header/Header.component';

export class App extends React.Component {
  render() {
    const { headerText } = this.props;
    return (
      <StyleVariableContainer>
        <AppHeader headerText={headerText} />
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </StyleVariableContainer>
    );
  }
}

App.propTypes = {
  headerText: PropTypes.string
};

App.defaultProps = {
  headerText: ''
};

export const mapStateToProps = ({ sample }) => ({
  headerText: sample.headerText
});

export default connect(mapStateToProps, null)(App);
