import React, { Component } from 'react';
import { setProfile } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch'


class CollectionBig extends Component {
  constructor(props){
    super(props);
    this.state = {
      collection: {}
    }
  }


  goToProfile = () => {
    getUserInfo(this.state.uid || 'kUq7VixehNQ3znsMEcPpijzWGBV2')
      .then(result => this.props.setProfile(result));
    this.props.history.push('/user');
  }

  render() {    
    const { location, id, uid, username, title, description, avatar } = this.props.collection;

    return (
      <div className='collection-big'>
        <header className='collection-header-big'>
          <img className='collection-img-big'/>
          <button onClick={this.goToProfile}>view profile</button>
          <h4 className='collection-title-big'>{title}</h4>
          <p className='collection-location-big'>{location}</p>
        </header>
        <main className='collection-body-big'>
          <section className='collection-description-big>'>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>{username}</li>
            </ul>
          </section>
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



