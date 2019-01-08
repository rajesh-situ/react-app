import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const { name } = this.props.sample;

    return (
      <div>Hello {name}</div>
    );
  }
}

export const mapStateToProps = ({ sample }) => ({
  sample
});

App.propTypes = {
  sample: PropTypes.object
};

App.defaultProps = {
  sample: null
};

export default connect(mapStateToProps, null)(App);
