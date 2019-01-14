import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sample from './sample.reducer';

// combine reducer function used to combine all reducers before exporting out
export default (history) => combineReducers({
  router: connectRouter(history),
  sample
});
