export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.user;
    case 'SIGN_OUT':
      return {};
    case 'UPDATE_USER':
      return action.user
    default: return state;
  }
}
