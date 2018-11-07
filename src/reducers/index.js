import {combineReducers} from 'redux';
import product from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  product,
  ajaxCallsInProgress
});

export default rootReducer;
