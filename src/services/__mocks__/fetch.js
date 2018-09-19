// import { apiFetch, apiFormDataFetch } from './api'

// jest.mock('./api');

// export const postUserInfo = user => {
//   return apiFetch('/users', 'POST', user)
// }

// export const getUserInfo = uid => {
//   return apiFetch(`/users/${uid}`, 'GET')
//   .then(response => response.json())
// }

// export const putUserInfo = (userInfo, uid) => {
//   return apiFormDataFetch(`/users/${uid}`, 'PUT', userInfo)
//   .then(response => response.json())
// }

// export const postCollection = (collection) => {
//   return apiFormDataFetch(`/collections`, `POST`, collection)
//   .then(response => response.json())
// }

export const getAllCollections = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666,
      uid: 'string',
      category: 'string',
      title: 'string',
      description: 'string',
      image: 'string'}])
  })

export const getUserCollections = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666,
      uid: 'string',
      category: 'string',
      title: 'string',
      description: 'string',
      image: 'string'}])
  })

export const getCollectionsByCategory = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666,
      uid: 'string',
      category: 'vinyl',
      title: 'string',
      description: 'string',
      image: 'string'}])
  })
