import React from 'react';
import { AddCollection } from './';
import { shallow } from 'enzyme';
import { postCollection } from '../services/fetch';

jest.mock('../services/fetch.js');

describe('AddCollection', () => {
  let wrapper;
  let mockHandleChange = jest.fn();
  let mockEvent = {
    target: {name: 'title', value: 'sweet'},
    preventDefault: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<AddCollection user={{uid: 1}} history={{push: jest.fn()}} />);
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should handleChange', () => {
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('title')).toEqual('sweet')
  })


  it('should call postCollection on submit', () => {
    wrapper.find('form').simulate('submit', mockEvent);
    expect(postCollection).toBeCalled();
  })
})

