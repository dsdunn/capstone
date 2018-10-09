import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { collectionReducer } from './collectionReducer';
import { collectionsListReducer } from './collectionsListReducer';

const rootReducer =  combineReducers({
  user: userReducer,
  profile: profileReducer,
  collection: collectionReducer,
  collectionsList: collectionsListReducer
})

export default rootReducer;