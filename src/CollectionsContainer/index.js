import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCollections, getCollectionsByCategory } from '../services/fetch';
import { updateCollectionsList, setCategory } from '../actions';
import CollectionSmall from '../CollectionSmall';
import './styles.css';

export class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all' 
    }
  }

  componentDidMount() {
    getAllCollections()
      .then(response => this.props.updateCollectionsList(response))
  }

  handleClick = (event) => {
    event.preventDefault()
    let category = event.target.name;
    this.props.setCategory(category);
    this.fetchByCategory(category);
  }

  fetchByCategory = (category) => {
    getCollectionsByCategory(category)
      .then(response => this.props.updateCollectionsList(response))
  }

  buildCollectionsList = () => {
    return this.props.collectionsList.length && this.props.collectionsList.map(collection => <CollectionSmall collection={collection} key={collection.id}/>)
  }

  render() {
    const list = this.buildCollectionsList();
    let selectedBg = `collections-container-bg ${this.props.category}`
    let selectedTxt = `collections-category-name ${this.props.category}-txt`

    return (
      <div>
      <div className={selectedBg}></div>
        <div className='collections-container'>
        <h1 className={selectedTxt}>{this.props.category}</h1>
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
  collectionsList: state.collectionsList,
  category: state.category
})

export const mapDispatchToProps = (dispatch) => ({
  updateCollectionsList: (list) => dispatch(updateCollectionsList(list)),
  setCategory: (category) => dispatch(setCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);







