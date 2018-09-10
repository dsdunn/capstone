export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.userId;
    case 'SIGN_OUT':
      return ''
    default: return state;
  }
}
