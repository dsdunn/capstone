import React, { Component } from 'react';
import { getAllCollections } from '../services/fetch';
import CollectionSmall from '../CollectionSmall';
import './styles.css';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      category: 'all'
    }
  }

  componentDidMount() {
    getAllCollections()
      .then(response => this.setState({ collections: response }))
  }

  render() {
    const list = this.state.collections.map(collection => <CollectionSmall collection={collection} />)
    return (
      <div className='collections-container'>
        {list}
      </div>
    )
  }
}

export default CollectionsContainer;