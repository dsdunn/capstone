import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsContainer } from './';
import { getAllCollections, getCollectionsByCategory } from '../services/fetch'

jest.mock('../services/fetch');

describe('CollectionsContainer', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn(),
                  target: { name: 'some cool name' } }
    wrapper = shallow(<CollectionsContainer />)

  })

  it('should get all collections when mounted', () => {
    expect(getAllCollections).toHaveBeenCalled()
  })

  it('should handle a dang click', () => {
    wrapper.instance().handleClick(mockEvent)
    const actual = wrapper.state('category')
    const expected = 'some cool name'

    expect(actual).toEqual(expected)
  })

  it('should fetch a collection by category', () => {
    wrapper.instance().fetchByCategory('vinyl')
    const actual = wrapper.state('collections')
    const expected = [{ id: 666,
             uid: 'string',
             category: 'string',
             title: 'string',
             description: 'string',
             image: 'string' }]
    expect(actual).toEqual(expected)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})