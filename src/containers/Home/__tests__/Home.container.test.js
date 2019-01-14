import React from 'react';
import renderer from 'react-test-renderer';
import HomeContainer from '../Home.container';

describe('the home container', () => {
  it('should render correctly', () => {
    const component = renderer.create(<HomeContainer />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

