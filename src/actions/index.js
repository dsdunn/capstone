export const signIn = (user) => ({
  type: 'SIGN_IN',
  user
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const updateUser = (username, uid) => ({
  type: 'UPDATE_USER',
  username,
  uid
})
 