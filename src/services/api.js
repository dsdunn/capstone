import config from './config';

export const apiFetch = (path, method = 'GET', payload = null) => {
  return fetch(`${config.url}${path}`, {
    method,
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
     // 'Authorization': `Token token=${config.apiKey}`
    },
    // body: JSON.stringify(payload)
  })
}