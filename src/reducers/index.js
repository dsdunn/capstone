import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { collectionReducer } from './collectionReducer';

const rootReducer =  combineReducers({
  user: userReducer,
  profile: profileReducer,
  collection: collectionReducer
})

export default rootReducer;