import React from 'react';
import { shallow } from 'enzyme';
import { signIn, setProfile } from '../actions';
import { Login, mapStateToProps, mapDispatchToProps } from './';

describe('Login', () => {
  let wrapper;
  let mockEvent;
  let history;

  beforeEach(() => {
    history = { location: { pathname: '/'},
                goBack: jest.fn(),
                push: jest.fn() 
              }


    mockEvent = { preventDefault: jest.fn(),
                  target: {
                    id: 'email',
                    value: 'me@you.com'
                  }
                }

    wrapper = shallow(<Login history={history} />)
  })

  it('should start with default state of email, password, error', () => {
    const expected = {
      email: '',
      password: '',
      error: ''
    }
    const actual = wrapper.state()

    expect(actual).toEqual(expected)
  })

  it('should update state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent)
    const actual = wrapper.state()
    const expected = { email: 'me@you.com', password: '', error: '' }
    expect(actual).toEqual(expected)
  })

  it('should reset the form when resetForm is called', () => {
    wrapper.setState({ email: 'me@you.com' })
    wrapper.instance().resetForm()
    const actual = wrapper.state('email')
    const expected = ''

    expect(actual).toEqual(expected)
  })

  it('should return a props object with signIn', () => {
    const mockDispatch = jest.fn();
    const mockUser = { password1: '123456',
                       password2: '123456',
                       email: 'heck@yeah.com',
                       username: 'Sparkle' }

    const mappedProps = mapDispatchToProps(mockDispatch)
    const actionToDispatch = signIn(mockUser);

    mappedProps.signIn(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
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

  it('should call goBack when the form is closed', () => {
    let spy = jest.spyOn(wrapper.instance(), 'goBack')
    wrapper.find('.login-close-link').simulate('click');

    expect(spy).toHaveBeenCalled();
  })

  it('should go call goBack when goBack', () => {
    wrapper.instance().goBack()
    expect(history.goBack).toHaveBeenCalled()
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return a props object', () => {
    const mockState = {user: {}};
    const expected = {"user": {}};

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})
