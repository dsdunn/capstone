export const signIn = (userId) => ({
  type: 'SIGN_IN',
  userId
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const updateUsername = (username) => ({
  type: 'UPDATE_USERNAME',
  username
})
 