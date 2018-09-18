import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './';

describe('Signup', () => {
  let wrapper;
  let history;

  beforeEach(() => {
    history = { location: 'location', goBack: jest.fn() }
    wrapper = shallow(<Signup history={ history }/>)
  })

  it('should start with default state of username, email, password1, password2, and error', () => {
    const actual = wrapper.state()
    const expected = {
      email: '',
      username: '',
      password1: '',
      password2: '',
      error: null
    }

    expect(actual).toEqual(expected)
  })

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {id: 'email', value: 'sleepy' }}

    wrapper.instance().handleChange(mockEvent)

    const actual = wrapper.state('email')

    expect(actual).toEqual('sleepy')
  })

  it('should a user a user when createUser is called', () => {
    const mockResponse = { user: { uid: 666 }}

    wrapper.setState({ username: 'Billy'})
    const actual = wrapper.instance().createUser(mockResponse)

    const expected = { uid: 666, username: 'Billy'}

    expect(actual).toEqual(expected)
  })

  it('should reset state when resetForm is called', () => {
    wrapper.setState({ username: 'Billy'})
    wrapper.instance().resetForm()
    const actual = wrapper.state()
    const expected = {
      email: '',
      username: '',
      password1: '',
      password2: '',
      error: null
    }

    expect(actual).toEqual(expected)
  })

  // it('should submit the form when handleSubmit is called', () => {
  //   const mockEvent = { preventDefault: jest.fn() }
  //   wrapper.instance().handleSubmit(mockEvent)
  //   console.log(actual)
  // })
  it('should validate the form when validate is called', () => {
    wrapper.setState({ password1: '123456', password2: '1234567' })
    const actual = wrapper.instance().validate()
    const expected = false

    expect(actual).toEqual(expected)
  })

  it('should validate the form when validate is called', () => {
    wrapper.setState({ password1: '123456', password2: '123456' })
    const actual = wrapper.instance().validate()
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('should go call goBack when goBack', () => {
    wrapper.instance().goBack()
    expect(history.goBack).toHaveBeenCalled()
  })


  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})






















