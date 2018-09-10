import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { usernameReducer } from './usernameReducer'

const rootReducer =  combineReducers({
  user: userReducer,
  username: usernameReducer
})

export default rootReducer;