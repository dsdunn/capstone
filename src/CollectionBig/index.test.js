import React from 'react';
import { CollectionBig } from './';
import { shallow } from 'enzyme';
import { getUserInfo } from '../services/fetch';
import { mapStateToProps, mapDispatchToProps } from './index.js'
import { setProfile } from '../actions';

jest.mock('../services/fetch');

describe('CollectionBig', () => {
  let wrapper;
  let mockCollection = {
    location: 'yo mama',
    id: 1,
    uid: 1,
    username: 'yo mama',
    title: 'yo mama',
    description: 'so fat',
    avatar: 'yo mama',
    image: 'yo mama',
    items: ['this', 'that']
  }

  beforeEach(() => {
    wrapper = shallow(<CollectionBig 
      history={{location: 'yo mamas', push: jest.fn()}} 
      collection={mockCollection } 
      setProfile={jest.fn()}/>); 
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call goToProfile when avatar is clicked', () => {
    wrapper.find('.collection-big-avatar').simulate('click');
    expect(getUserInfo).toBeCalled();
  })

  it('should return a props object with setProfile', () => {
    const mockDispatch = jest.fn();
    const mockProfile = { password1: '123456',
                       password2: '123456',
                       email: 'heck@yeah.com',
                       username: 'Sparkle' }
                       

    const mappedProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = setProfile(mockProfile);

    mappedProps.setProfile(mockProfile);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should return a props object', () => {
    const mockState = {collection: "this and that"};
    const expected = {collection: "this and that"};
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })

})


