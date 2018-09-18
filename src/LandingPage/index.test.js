import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './'

describe('LandingPage', () => {
  const wrapper = shallow(<LandingPage />)

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})