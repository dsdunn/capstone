import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer =  combineReducers({
  userId: userReducer
})

export default rootReducer;