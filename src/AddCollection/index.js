import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
// import './styles.css'

class AddCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      collectionName: '',
      description: '',
      category: '',
      pic: null
    }
  }

  componentDidMount() {
    //set state with user info from store
  }

  render() {
    return (
      <form className='add-collection-form' onSubmit={addCollection}>
        <input id='collection-form-name' placeholder='name your collection'/>
        <label htmlFor='collection-form-category'>Select a Category</label>
        <select id='collection-form-category' required={true}>
          <option value=''>choose a category</option>
          <option value='coins'>Coins</option>
          <option value='comics'>Comics</option>
          <option value='cards'>Cards</option>
          <option value='vinyl'>Vinyl</option>
          <option value='other'>Other</option>
        </select>
      </form>
    )
  }
}

