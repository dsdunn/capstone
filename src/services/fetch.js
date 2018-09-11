import { apiFetch } from './api'

export const postUserInfo = user => {
  return apiFetch('/users', 'POST', user)
}

export const getUserInfo = uid => {
  return apiFetch(`/users/${uid}`, 'GET')
  .then(response => response.json())
}