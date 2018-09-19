
import React from 'react';
import { shallow } from 'enzyme';
import { EditProfile, mapDispatchToProps, mapStateToProps, } from './'
import { updateUser } from '../actions';

describe('EditProfile', () => {
  let wrapper;
  let mockUser;
  let mockEvent;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn(),
                  target: {
                    name: 'some name',
                    value: 'some value'
                  } 
                }

    mockUser = {
                avatar: '2 comes out in 2020',
                username: 'username? username for what?',
                location: 'somewhere else',
                bio: 'dome'
               }

    wrapper = shallow(<EditProfile user={mockUser} />)
  })

  it('should set state with a user when mounted', () => {
    const actual = wrapper.state()
    const expected = { uid: '',
        username: 'username? username for what?',
        bio: 'dome',
        location: 'somewhere else',
        avatar: '2 comes out in 2020',
        showEditor: false }
    expect(actual).toEqual(expected)
  })

  it('should update state when handleSubmit is called', () => {
    wrapper.instance().handleChange(mockEvent)
    const actual = wrapper.state()
    const expected = { uid: '',
        username: 'username? username for what?',
        bio: 'dome',
        location: 'somewhere else',
        avatar: '2 comes out in 2020',
        showEditor: false,
        'some name': 'some value' }
    expect(actual).toEqual(expected)
  })

  it('should update state when handleSubmit is called with files', () => {
    const filesMockEvent = { preventDefault: jest.fn(),
                             target: {
                             files: ['sick file!!!'],
                             name: 'some name',
                             value: 'some value'
                             } 
                           }
    wrapper.instance().handleChange(filesMockEvent)
    const actual = wrapper.state()
    const expected = { uid: '',
        username: 'username? username for what?',
        bio: 'dome',
        location: 'somewhere else',
        avatar: '2 comes out in 2020',
        showEditor: false,
        'some name': 'sick file!!!' }

    expect(actual).toEqual(expected)
  })
})

































