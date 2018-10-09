export const collectionsListReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_COLLECTIONS_LIST':
      return action.collectionsList;
    default: return state;
  }
}