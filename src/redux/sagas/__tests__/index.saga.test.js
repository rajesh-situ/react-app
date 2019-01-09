import sagaHelper from 'redux-saga-testing';
import combinedSagas from '../index.saga';

describe('combined saga should combine all sagas', () => {
  const it = sagaHelper(combinedSagas());
  it('should do nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
