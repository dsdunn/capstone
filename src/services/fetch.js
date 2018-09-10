import { apiFetch } from './api'

export const postUserInfo = user => {
  return apiFetch('/users', 'POST', user)
}