import sampleReducer from '../sample.reducer';
import { setName } from '../../actions/index.actions';

describe('sample reducer', () => {
  it('should  set name from the action\'s payload', () => {
    const expectedState = {
      name: 'testName'
    };
    const action = setName({ name: 'testName' });
    expect(sampleReducer({}, action)).toEqual(expectedState);
  });
});

