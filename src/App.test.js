import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { App, mapStateToProps } from './App';

const mockStore = createStore(() => ({
  sample: {
    name: 'test'
  }
}));

describe('App page', () => {
  it('should render without any issue', () => {
    const rendered = shallow(<App />);
    expect(rendered.exists()).toBe(true);
  });
});

describe('the mapStateToProps function', () => {
  it('should return an object with the relevant keys', () => {
    const expectedOutput = ['sample'];
    expect(Object.keys(mapStateToProps(mockStore))).toEqual(expectedOutput);
  });
});
