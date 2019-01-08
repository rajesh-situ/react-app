import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class App extends React.Component {
  render() {
    const { name } = this.props.sample;
    console.log(name);

    return (
      <div>Hello World!!</div>
    );
  }
}

export const mapStateToProps = ({ sample }) => ({
  sample
});

App.propTypes = {
  sample: propTypes.object({
    name: propTypes.string
  })
};

App.defaultProps = {
  sample: null
};

export default connect(mapStateToProps, null)(App);
