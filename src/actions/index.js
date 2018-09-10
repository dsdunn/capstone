export const signIn = (user) => ({
  type: 'SIGN_IN',
  user
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const updateUsername = (username) => ({
  type: 'UPDATE_USERNAME',
  username
})
 