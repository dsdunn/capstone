import React from 'react';
import CollectionBig from './';
import { shallow } from 'enzyme';

describe('CollectionBig', () => {
  let wrapper = shallow(<CollectionBig/>);
  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})


