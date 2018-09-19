import React, { Component } from 'react';
import { setProfile } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
import './styles.css';
import PropTypes from 'prop-types';


export class CollectionBig extends Component {
  constructor(props){
    super(props);
  }

  goToProfile = () => {
    getUserInfo(this.props.collection.uid)
      .then(result => this.props.setProfile(result));
    this.props.history.push('/user');
  }

  makeRows = (items) => {
    if(!items) return;
    return items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.value}</td>
          <td>unknown</td>
        </tr>
      )
    })
  }

  render() {    
    const { location, id, uid, username, title, description, avatar, image, items } = this.props.collection;
    const background = `https://collecshare.herokuapp.com/${image}`;
    const tableRows = this.makeRows(items);

    return (
      <div className='collection-big'>
        <div className={'collection-big-background'} style={{backgroundImage: `url(${background})`}}>
        </div>
        <h1 className='collection-big-title'>{title}</h1>
        <main className='collection-big-main'>
          <header className='collection-big-header'>
            <img className='collection-big-image' src={`https://collecshare.herokuapp.com/${image}`}/>
            <div className='collection-big-user-group-wrapper'>
              <div className='collection-big-user-group'>
                <img className='collection-big-avatar' src={`https://collecshare.herokuapp.com/${avatar}`} onClick={this.goToProfile}/>
                <h4 className='collection-big-username'>{username}</h4>
                <p className='collection-big-location'>{location}</p>
              </div>
            </div>
          </header>
          <hr/>
          <div className='collection-big-body'>
            <div>
              <h5>Description: </h5>
              <p className='collection-big-description>'>{description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum mauris ut porttitor pellentesque. Proin non ex at augue dictum pulvinar. Pellentesque posuere diam lectus, in sodales turpis dictum malesuada. In suscipit nulla vel arcu aliquet, vitae fringilla lorem vulputate. Suspendisse nec lorem ligula. Nunc ut ipsum in urna venenatis tempus a at augue.</p>
            </div>
            <div className='collection-big-items'>
              <h5>Items:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => dispatch(setProfile(profile))
})

export const mapStateToProps = (state) => ({
  collection: state.collection
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionBig))

CollectionBig.propTypes = {
  collection: PropTypes.object,
  setProfile: PropTypes.func
}


