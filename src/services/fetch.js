import { apiFetch, apiFormDataFetch } from './api'

export const postUserInfo = user => {
  return apiFetch('/users', 'POST', user)
}

export const getUserInfo = uid => {
  return apiFetch(`/users/${uid}`, 'GET')
  .then(response => response.json())
}

export const putUserInfo = (userInfo, uid) => {
  return apiFormDataFetch(`/users/${uid}`, 'PUT', userInfo)
  .then(response => response.json())
}

export const getCollection = (id) => {
  return apiFetch(`/collections/${id}`, 'GET')
  .then(response => response.json())
}

export const postCollection = (collection) => {
  return apiFormDataFetch(`/collections`, `POST`, collection)
  .then(response => response.json())
}

export const putCollection = (collection, id) => {
  return apiFormDataFetch(`/collections/${id}`, 'PUT', collection)
  .then(response => response.json())
}

export const deleteCollection = (id) => {
  return apiFetch(`/collections/${id}`, 'DELETE')
  .then(response => response.json())
}

export const getAllCollections = () => {
  return apiFetch('/collections')
  .then(response => response.json())
}

export const getUserCollections = uid => {
  return apiFetch(`/collections?uid=${uid}`)
  .then(response => response.json())
}

export const getCollectionsByCategory = (cat) => {
  return apiFetch(`/collections?category=${cat}`)
  .then(response => response.json())
}

export const getSearchResults = (terms) => {
  return apiFetch(`/search?keyword=${terms}`)
  .then(response => response.json())
}






