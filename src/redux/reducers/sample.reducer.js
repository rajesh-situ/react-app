import { SET_NAME } from '../actions/index.actions';

const initialState = {
  name: 'world'
};

// sample reducer, should be removed
export default function sample(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}
