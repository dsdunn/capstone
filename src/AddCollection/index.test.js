import React from 'react';
import AddCollection from './';
import { shallow } from 'enzyme';

describe('AddCollection', () => {
  let wrapper = shallow(<AddCollection/>);
  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
