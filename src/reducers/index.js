import { combineReducers } from 'redux';
import { signInReducer } from './signInReducer';

const rootReducer =  combineReducers({
  userId: signInReducer
})

export default rootReducer;