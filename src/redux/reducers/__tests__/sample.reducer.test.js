import sampleReducer from '../sample.reducer';
import { setName } from '../../actions/index.actions';

describe('sample reducer', () => {
  it('should  set name from the action\'s payload', () => {
    const expectedState = {
      name: 'testName',
      headerText: 'testName'
    };
    const action = setName({ name: 'testName', headerText: 'testName' });
    expect(sampleReducer({}, action)).toEqual(expectedState);
  });
  it('should return default state if no valid action is passed', () => {
    const expectedState = {};
    const action = {
      type: 'Random action type'
    };
    expect(sampleReducer({}, action)).toEqual(expectedState);
  });
});

