export const categoryReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.category;
    default: return state;
  }
}