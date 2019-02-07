import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App page', () => {
  it('should render without any issue', () => {
    const rendered = shallow(<App />);
    expect(rendered.exists()).toBe(true);
  });
});
