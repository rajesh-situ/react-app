import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {

    const {name} = this.props.sample
    console.log(name);

    return (
      <div>Hello World!!</div>
    );
  }
}

export const mapStateToProps = ({sample}) => ({
  sample
})

export default connect(mapStateToProps,null)(App);
