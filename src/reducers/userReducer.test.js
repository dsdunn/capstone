import { userReducer } from './userReducer'

describe('userReducer', () => {
  const mockUser = {
    uid: '1',
    username: 'Jim',
    location: 'Denver',
    avatar: 'avatars/avatar.png',
    bio: 'I rule'
  }

  it('should return the initial state with no action', () => {
    expect(userReducer(undefined, {})).toEqual({})
  });

  it('should return the user with sign in', () => {
    const mockAction = { type: 'SIGN_IN', user: mockUser }

    expect(userReducer(undefined, mockAction)).toEqual(mockUser)
  });

  it('should return a blank state with sign out', () => {
    const mockAction = { type: 'SIGN_OUT' }

    expect(userReducer(undefined, mockAction)).toEqual({})
  });

  it('should return the user with update user', () => {
    const mockAction = { type: 'UPDATE_USER', user: mockUser }

    expect(userReducer(undefined, mockAction)).toEqual(mockUser)
  });
});
