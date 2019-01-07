import { combineReducers } from 'redux';
import sample from './sample.reducer';

//combine reducer function used to combine all reducers before exporting out
export default combineReducers({
    sample
});