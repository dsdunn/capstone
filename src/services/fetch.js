import { apiFetch } from './api'

export const postUserInfo = user => {
  return apiFetch('/users', 'POST', user)
}

export const getUserInfo = uid => {
  return apiFetch(`/users/${uid}`, 'GET')
  .then(response => response.json())
}

export const putUserInfo = userInfo => {
  return apiFetch(`/users/${userInfo.uid}`, 'PUT', userInfo)
  .then(response => response.json())
}

export const postCollection = collection => {
  return apiFetch(`/collections`, `POST`, collection)
  .then(response => response.json())
}

export const getAllCollections = () => {
  return apiFetch('/collections')
  .then(response => response.json())
}