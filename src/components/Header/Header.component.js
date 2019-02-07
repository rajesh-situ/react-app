import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Header.styles';

export default class Header extends Component {
  render() {
    const { headerText } = this.props;
    return (
      <styles.Container>
        <styles.Title>
          {headerText}
        </styles.Title>
      </styles.Container>
    );
  }
}

Header.propTypes = {
  headerText: PropTypes.string
};

Header.defaultProps = {
  headerText: ''
};
