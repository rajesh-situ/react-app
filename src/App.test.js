import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import App from './App';

const mockStore = createStore(() => ({
  sample: {
    name: 'test'
  }
}));

describe('App page', () => {
  it('should render without any issue', () => {
    const rendered = shallow(<App store={mockStore} />);
    expect(rendered.exists()).toBe(true);
  });
});
