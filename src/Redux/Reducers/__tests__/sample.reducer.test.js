import sampleReducer from '../sample.reducer';
import { setName } from '../../Actions/index.actions';

describe('sample reducer', () => {
  it('should  set name from the action\'s payload', () => {
    const expectedState = {
      name: 'testName'
    };
    const action = setName({ name: 'testName' });
    console.log(action);
    expect(sampleReducer({}, action)).toEqual(expectedState);
  });
});

