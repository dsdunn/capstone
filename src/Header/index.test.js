import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps, mapStateToProps } from './'
import { signOut } from '../actions';

describe('Header', () => {
  let wrapper;
  let mockProfile;
  let mockSignOut = jest.fn()
  let mockHistory;

  beforeEach(() => {
    mockProfile = {
      avatar: '2 comes out in 2020',
      username: 'username? username for what?',
      location: 'somewhere else',
      bio: 'dome'
    }
    mockHistory = { 
                    location: { pathname: '/'},
                    goBack: jest.fn(),
                    push: jest.fn() 
                  }
    wrapper = shallow(<Header user={mockProfile}
                              signOut={mockSignOut}
                              history={mockHistory}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should start with default state of dashboardActive, and searchInput', () => {
    const expected = { 
      dashboardActive: false,
      searchInput: ''
    }

    const actual = wrapper.state()
    expect(actual).toEqual(expected)
  })

  it('should sign out when you call handleSignOut', () => {
    wrapper.instance().handleSignOut()
    expect(mockSignOut).toHaveBeenCalled()
  })

  it('should toggle dashboard state when handleDashboard is called', () => {
    wrapper.instance().handleDashboard()
    const actual = wrapper.state('dashboardActive')
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('should call loginLocation when the Login btn is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'loginLocation')
    wrapper.find('.test1').simulate('click');

    expect(spy).toHaveBeenCalled();
  })

  it('should call signupLocation when the Login btn is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signupLocation')
    wrapper.find('.test2').simulate('click');

    expect(spy).toHaveBeenCalled();
  })

  it('should update searchInput state when handleSearchChange is called', () => {
    const mockEvent = { target: { value: 'sick value dude!' } }
    wrapper.instance().handleSearchChange(mockEvent)
    const actual = wrapper.state('searchInput')
    const expected = 'sick value dude!' 

    expect(actual).toEqual(expected)
  })

  it('should return a props object with signIn', () => {
    const mockSignIn = jest.fn();
    const mockDispatch = jest.fn();

    const mappedProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = signOut();

    mappedProps.signOut();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should return a props object', () => {
    const mockState = {user: {}};
    const expected = {"user": {}};

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})




























