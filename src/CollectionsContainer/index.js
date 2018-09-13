import React, { Component } from 'react';
import { getAllCollections } from '../services/fetch';
import { CollectionSmall } from '../CollectionSmall';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    getAllCollections()
      .then(response => this.setState({ collections: response }))
  }

  render() {
    const list = this.state.collections.map(collection => <CollectionSmall {...collection}/>)
    return (
      <div className='collections-container'>
        <p>collections container</p>
        {list}
      </div>
    )
  }
}

export default CollectionsContainer;