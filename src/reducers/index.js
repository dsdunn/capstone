import { combineReducers } from 'redux';
import { signInReducer } from './';

const rootReducer =  combineReducers({
  userId: signInReducer
})

export default rootReducer;