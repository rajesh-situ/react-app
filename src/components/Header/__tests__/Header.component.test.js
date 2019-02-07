import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header.component';

describe('The header component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
