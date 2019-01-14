import React from 'react';
import renderer from 'react-test-renderer';
import TestContainer from '../Test.container';

describe('the home container', () => {
  it('should render correctly', () => {
    const component = renderer.create(<TestContainer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
