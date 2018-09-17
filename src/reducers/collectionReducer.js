export const collectionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COLLECTION':
      return action.collection;
    default: return state;
  }
}