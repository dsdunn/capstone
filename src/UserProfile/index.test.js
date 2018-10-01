import React from 'react';
import { shallow } from 'enzyme';
import { UserProfile, mapStateToProps } from './';
import { getUserCollections } from '../services/fetch'

jest.mock('../services/fetch');

describe('UserProfile', () => {
  let wrapper;
  let mockProfile;

  beforeEach(() => {
    mockProfile = {
      avatar: '2 comes out in 2020',
      username: 'username? username for what?',
      location: 'somewhere else',
      bio: 'dome'
    }
    wrapper = shallow(<UserProfile profile={mockProfile} /> )
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should display a message if no collections in state', () => {
    wrapper.setState({ collections: [] })
    expect(wrapper.find('.message').length).toEqual(1);
  })

  it('should return a props object', () => {
    const mockState = {profile: {}};
    const expected = {"profile": {}};

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})
