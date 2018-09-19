
import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard, mapDispatchToProps, mapStateToProps, } from './'
import { setProfile } from '../actions';

describe('Dashboard', () => {
  let wrapper;
  let mockSetProfile;
  let mockUser;
  let mockHistory;
  let mockHandleSignOut;

  beforeEach(() => {
    mockHistory = { 
                   location: { pathname: '/'},
                   goBack: jest.fn(),
                   push: jest.fn() 
                  }

    mockSetProfile = jest.fn()
    mockHandleSignOut = jest.fn()

    mockUser = {
                avatar: '2 comes out in 2020',
                username: 'username? username for what?',
                location: 'somewhere else',
                bio: 'dome'
               }

    wrapper = shallow(<Dashboard setProfile={mockSetProfile} 
                                 user={mockUser}
                                 history={mockHistory}
                                 handleSignOut={mockHandleSignOut}
                                  />)
  })

  it('should call setProfile when handleViewProfile is called', () => {
    wrapper.find('.dashboard-view-profile').simulate('click')
    expect(mockSetProfile).toHaveBeenCalled()
  })

  it('should route the user to a new destination when getPath is called', () => {
    wrapper.find('.test3').simulate('click')
    expect(mockHistory.push).toHaveBeenCalled()
  })

  it('should call handleSignOut when Sign out btn is clicked', () => {
    wrapper.find('.test4').simulate('click')
    expect(mockHandleSignOut).toHaveBeenCalled()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should return a props object with setProfile', () => {
    const mockSignIn = jest.fn();
    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = setProfile(mockUser);

    mappedProps.setProfile(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should return a props object', () => {
    const mockState = {user: {}};
    const expected = {"user": {}};

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})
