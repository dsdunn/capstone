import { combineReducers } from 'redux';
import { userIdReducer } from './userIdReducer';
import { usernameReducer } from './usernameReducer'

const rootReducer =  combineReducers({
  userId: userIdReducer,
  username: usernameReducer
})

export default rootReducer;