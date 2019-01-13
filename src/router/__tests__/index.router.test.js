import React from 'react';
import { shallow } from 'enzyme';
import Router from '../index.router';

describe('the root router', () => {
  it('should have the correct number of routes', () => {
    const wrapper = shallow(<Router />);
    expect(wrapper.children().length).toBe(2);
  });
});

