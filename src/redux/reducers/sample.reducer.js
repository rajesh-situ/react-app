import { SET_NAME } from '../actions/index.actions';

const initialState = {
  name: 'world',
  headerText: 'My React App'
};

// sample reducer, should be removed
export default function sample(state = initialState, { payload, type }) {
  switch (type) {
    case SET_NAME: {
      const { name, headerText } = payload;
      return { ...state, name, headerText };
    }
    default:
      return state;
  }
}
