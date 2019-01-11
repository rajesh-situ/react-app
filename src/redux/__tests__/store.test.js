import getStore from '../store';

describe('the getStore function', () => {
  it('should return a store object', () => {
    expect(typeof getStore()).toBe(typeof {});
  });
});

