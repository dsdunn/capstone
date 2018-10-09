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

export const getCollection = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666,
      uid: 'string',
      category: 'vinyl',
      title: 'string',
      description: 'string',
      image: 'string'}])
  })

export const getUserInfo = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666
    }])
  })

export const getSearchResults = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      collections:[]
    }])
  })

export const postCollection = jest.fn().mockImplementation(() => {
  return Promise.resolve([{  
      id: 666,
      uid: 'string',
      category: 'vinyl',
      title: 'string',
      description: 'string',
      image: 'string'
    }])
  })