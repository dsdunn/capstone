import { collectionReducer } from './collectionReducer';
import * as actions from '../actions';

describe('collectionReducer', () => {
  const mockCollection = {
    uid: '1',
    username: 'Jim'
  }

  const expected = {
    uid: '1',
    username: 'Jim'
  }

  it('should return the initial state with no action', () => {
    expect(collectionReducer(undefined, {})).toEqual({})
  });

  it('should return a collection', () => {
    const results = collectionReducer(undefined, actions.setCollection(mockCollection))
    expect(results).toEqual(expected)
  });
});
