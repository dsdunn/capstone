import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { collectionReducer } from './collectionReducer';
import { collectionsListReducer } from './collectionsListReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer =  combineReducers({
  user: userReducer,
  profile: profileReducer,
  collection: collectionReducer,
  collectionsList: collectionsListReducer,
  category: categoryReducer
})

export default rootReducer;