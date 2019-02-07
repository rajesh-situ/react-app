import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from '../variables';

describe('Variables component', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Container />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
