import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsContainer } from './';
import { getAllCollections, getCollectionsByCategory } from '../services/fetch'

jest.mock('../services/fetch');

describe.only('CollectionsContainer', () => {
  let wrapper;
  let mockEvent;
  let mockCollectionsList = [{}, {}];
  let mockUpdateCollectionsList = jest.fn();
  let mockSetCategory = jest.fn();

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn(),
                  target: { name: 'some cool name' } }
    wrapper = shallow(<CollectionsContainer collectionsList={mockCollectionsList} updateCollectionsList={mockUpdateCollectionsList} setCategory={mockSetCategory}/>)

  })

  it('should get all collections when mounted', () => {
    expect(getAllCollections).toHaveBeenCalled()
  })

  it('should handle a dang click', () => {
    wrapper.instance().handleClick(mockEvent)
    expect(mockSetCategory).toHaveBeenCalled()
  })

  it('should fetch a collection by category', () => {
    wrapper.instance().fetchByCategory('vinyl')
    const mockResponse = [{ id: 666,
             uid: 'string',
             category: 'string',
             title: 'string',
             description: 'string',
             image: 'string' }]

    expect(mockUpdateCollectionsList).toHaveBeenCalledWith(mockResponse)
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})