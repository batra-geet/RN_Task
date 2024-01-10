import {combineReducers} from 'redux';
import flightsReducer from '../reducer/HomeReducer';
const rootReducer = combineReducers({
  flightsReducer,
});

export default rootReducer;
