import React, { Component } from 'react';
import { getAllCollections, getCollectionsByCategory } from '../services/fetch';
import CollectionSmall from '../CollectionSmall';
import './styles.css';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      // category: 'all'
    }
  }

  componentDidMount() {
    getAllCollections()
      .then(response => this.setState({ collections: response }))
  }

  handleClick = (event) => {
    event.preventDefault()
    let category = event.target.name;
    this.fetchByCategory(category)
  }

  fetchByCategory = (category) => {
    getCollectionsByCategory(category)
      .then(response => this.setState({ collections: response }))
  }

  render() {
    const list = this.state.collections.map(collection => <CollectionSmall collection={collection} />)
    return (
      <div className='collections-container'>
      <button className='collections-container-cat-btn' name='comics' onClick={this.handleClick}>Comics</button>
      <button className='collections-container-cat-btn' name='cards' onClick={this.handleClick}>Cards</button>
      <button className='collections-container-cat-btn' name='coins' onClick={this.handleClick}>Coins</button>
      <button className='collections-container-cat-btn' name='vinyl' onClick={this.handleClick}>Vinyl</button>
      <button className='collections-container-cat-btn' name='other' onClick={this.handleClick}>Other</button>
        {list}
      </div>
    )
  }
}

export default CollectionsContainer;