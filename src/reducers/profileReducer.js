export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.profile;
    case 'ADD_COLLECTIONS':
      const newState = {
        ...state,
        collections: action.collections
      }
      return newState;
    default: return state;
  }
}