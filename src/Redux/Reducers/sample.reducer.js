import { SAMPLE_ACTION_TYPE } from '../Actions/index.actions';

const initialState = {
  name: 'world'
};

// sample reducer, should be removed
export default function sample(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return { ...state, name: action.paylod.name };
    default:
      return state;
  }
}
