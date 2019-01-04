import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// jest.unmock('react-redux');
// jest.mock('./pages/GaHOC', () => (args) => args);
Enzyme.configure({ adapter: new Adapter() });

describe('App page', () => {
  it('should render without any issue', () => {
    const rendered = Enzyme.shallow(<App />);
    expect(rendered.exists()).toBe(true);
  });
});
