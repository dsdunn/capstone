import React from 'react';
import App from './';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper = shallow(<App/>);
  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
