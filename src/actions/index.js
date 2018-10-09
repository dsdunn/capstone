export const signIn = (user) => ({
  type: 'SIGN_IN',
  user
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  user
})

export const setProfile = profile => ({
  type: 'SET_PROFILE',
  profile
})

export const addCollections = (collections) => ({
  type: 'ADD_COLLECTIONS',
  collections
})

export const setCollection = collection => ({
  type: 'SET_COLLECTION',
  collection
})

export const updateCollectionsList = (collectionsList) => {
  type: 'UPDATE_COLLECTIONS_LIST',
  collectionsList
}