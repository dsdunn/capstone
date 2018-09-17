import { profileReducer } from './profileReducer'

describe('profileReducer', () => {
  const mockProfile = {
    uid: '1',
    username: 'Jim',
    location: 'Denver',
    avatar: 'avatars/avatar.png',
    bio: 'I rule'
  }

  it('should return the initial state with no action', () => {
    expect(profileReducer(undefined, {})).toEqual({})
  });

  it('should return the profile with set profile', () => {
    const mockAction = { type: 'SET_PROFILE', profile: mockProfile }

    expect(profileReducer(undefined, mockAction)).toEqual(mockProfile)
  });
});
