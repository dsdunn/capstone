import React from 'react';
import { shallow } from 'enzyme';
import { CollectionSmall, mapDispatchToProps } from './'
import { setProfile, setCollection } from '../actions';
import { getUserInfo, getCollection } from '../services/fetch'

jest.mock('../services/fetch');

describe('CollectionSmall', () => {
  let wrapper;
  let mockCollection;
  let history;
  let mockSetCollection;

  beforeEach(() => {
    mockSetCollection = jest.fn()
    history = { location: 'location',
                goBack: jest.fn(),
                push: jest.fn() 
              }

    mockCollection = {
                        id: 'int',
                        uid: 'string',
                        category: 'string',
                        title: 'string',
                        description: 'string',
                        image: 'string'
                      }
    wrapper = shallow(<CollectionSmall collection={mockCollection}
                                       history={history}
                                       setCollection={mockSetCollection}/>)
  })

  it('should get a users info when mounted', () => {
    expect(getUserInfo).toHaveBeenCalled()
  })

  it('should start with default state of an empty user', () => {
    const actual = wrapper.state()
    const expected = { user: [ { id: 666 } ] }

    expect(actual).toEqual(expected)
  })

  it('should do the thing when viewCollectoinBig is called', () => {
    wrapper.instance().viewCollectionBig()
    expect(history.push).toHaveBeenCalled()
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return a props object with setProfile', () => {
    const mockDispatch = jest.fn();
    const mockUser = { password1: '123456',
                       password2: '123456',
                       email: 'heck@yeah.com',
                       username: 'Sparkle' }

    const mappedProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = setProfile(mockUser);

    mappedProps.setProfile(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})