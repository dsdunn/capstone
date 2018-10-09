import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCollections, getCollectionsByCategory } from '../services/fetch';
import CollectionSmall from '../CollectionSmall';
import './styles.css';

export class CollectionsContainer extends Component {
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

  handleClick = (event) => {
    event.preventDefault()
    let category = event.target.name;
    this.setState({ category })
    this.fetchByCategory(category)
  }

  fetchByCategory = (category) => {
    getCollectionsByCategory(category)
      .then(response => this.setState({ collections: response }))
  }

  render() {
    const list = this.state.collections.map(collection => <CollectionSmall collection={collection} key={collection.id}/>)
    let selectedBg = `collections-container-bg ${this.state.category}`
    let selectedTxt = `collections-category-name ${this.state.category}-txt`

    return (
      <div>
      <div className={selectedBg}></div>
        <div className='collections-container'>
        <h1 className={selectedTxt}>{this.state.category}</h1>
        <div className='collections-cat-btn-container'>
          <button className='collections-container-cat-btn' name='comics' onClick={this.handleClick}>comics</button>
          <button className='collections-container-cat-btn' name='cards' onClick={this.handleClick}>cards</button>
          <button className='collections-container-cat-btn' name='coins' onClick={this.handleClick}>coins</button>
          <button className='collections-container-cat-btn' name='vinyl' onClick={this.handleClick}>vinyl</button>
          <button className='collections-container-cat-btn' name='other' onClick={this.handleClick}>other</button>
        </div>
          {list}
        </div>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  collectionsList: state.collectionsList
})

export const mapDispatchToProps = (dispatch) => ({
  updateCollectionsList: (list) => dispatch(updateCollectionsList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);







