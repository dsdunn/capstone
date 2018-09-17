import * as actions from './index'

describe('actions', () => {
  it('should have a type of SIGN_IN', () => {
    const user = { uid: '1', username: 'New'}
    const expectedAction = {
      type: 'SIGN_IN',
      user
    }

    expect(actions.signIn(user)).toEqual(expectedAction)
  });
  it('should have a type of SIGN_OUT', () => {
    const expectedAction = {
      type: 'SIGN_OUT'
    }

    expect(actions.signOut()).toEqual(expectedAction)
  });
  it('should have a type of UPDATE_USER', () => {
    const user = { uid: '1', username: 'New'}
    const expectedAction = {
      type: 'UPDATE_USER',
      user
    }

    expect(actions.updateUser(user)).toEqual(expectedAction)
  });
  it('should have a type of SET_PROFILE', () => {
    const profile = { uid: '1', username: 'New'}
    const expectedAction = {
      type: 'SET_PROFILE',
      profile
    }

    expect(actions.setProfile(profile)).toEqual(expectedAction)
  });

});
