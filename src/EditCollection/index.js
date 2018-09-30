import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { putCollection } from '../services/fetch';
import { updateUser, setProfile, setCollection } from '../actions';
import close from '../images/close.svg';
import PropTypes from 'prop-types';

// import './styles.css'

export class EditCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: '',
      image: '',
      category: ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.collection
    })
  }

  handleChange = (event) => {
    const { name, value} = event.target;
    this.setState({
      [name]: event.target.files ? event.target.files[0] : value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = new FormData();
    body.append('title', this.state.title);
    body.append('description', this.state.description);
    body.append('category', this.state.category);
    body.append('image', this.state.image);

    putCollection(body, this.state.id)
    .then(result => {
      this.props.setCollection(result);
      this.props.history.goBack();
    })
  }

  goBack = () => {
    this.props.history.goBack();
  }


  render() {
    return (
      <form ref={el => (this.form = el)} className='edit-profile-form' id='photo-form' onSubmit={this.handleSubmit}>
        <a className='edit-profile-close-link' exact='true' onClick={() => this.goBack()} >
          <img className='close-btn' src={close}/>
        </a>
        <div className='edit-collection-input-container'>
          <label htmlFor='image'>Select Image:</label>
          <input type='file' name='image' onChange={this.handleChange}/>
        </div>
        <div className='edit-collection-input-container'>
          <label htmlFor='title'>title:</label>
          <input className='edit-profile-input' name='title' onChange={this.handleChange} value={this.state.title}/> 
        </div>
        <div className='edit-collection-input-container'>
          <label htmlFor='description'>description:</label>
          <textarea name='description' onChange={this.handleChange} value={this.state.description}/>
        </div>
        <div className='edit-profile-input-container'>
          add items placeholder div
        </div>
        <select name='category' required={true} onChange={this.handleChange} value={this.state.category}>
          <option value=''>choose a category</option>
          <option value='coins'>Coins</option>
          <option value='comics'>Comics</option>
          <option value='cards'>Cards</option>
          <option value='vinyl'>Vinyl</option>
          <option value='other'>Other</option>
        </select>
        <button className='edit-collection-submit-btn'>submit</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  collection: state.collection
})

export const mapDispatchToProps = (dispatch) => ({
  setCollection: (collection) => dispatch(setCollection(collection))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCollection));


EditCollection.propTypes = {
  history: PropTypes.object,
  setProfile: PropTypes.func,
  updateUser: PropTypes.func,
  user: PropTypes.object
}





