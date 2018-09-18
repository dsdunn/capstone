import React, { Component } from 'react';
import { setProfile } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
import './styles.css';


class CollectionBig extends Component {
  constructor(props){
    super(props);
  }


  goToProfile = () => {
    getUserInfo(this.props.collection.uid || 'kUq7VixehNQ3znsMEcPpijzWGBV2')
      .then(result => this.props.setProfile(result));
    this.props.history.push('/user');
  }

  render() {    
    const { location, id, uid, username, title, description, avatar, image } = this.props.collection;

    return (
      <div className='collection-big'>
        <header className='collection-big-header'>
          <img className='collection-big-image' src={`https://collecshare.herokuapp.com/${image}`}/>
          <h3 className='collection-big-title'>{title}</h3>
        </header>
          <div className='collection-big-user-group'>
            <img className='collection-big-avatar' src={`https://collecshare.herokuapp.com/${avatar}`} />
            <h4 className='collection-big-username'>{username}</h4>
            <button onClick={this.goToProfile}>view profile</button>
            <p className='collection-big-location'>{location}</p>
          </div>
        <main className='collection-big-body'>
          <h5>description: </h5>
          <p className='collection-big-description>'>{description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum mauris ut porttitor pellentesque. Proin non ex at augue dictum pulvinar. Pellentesque posuere diam lectus, in sodales turpis dictum malesuada. In suscipit nulla vel arcu aliquet, vitae fringilla lorem vulputate. Suspendisse nec lorem ligula. Nunc ut ipsum in urna venenatis tempus a at augue. Proin id mauris orci. Fusce molestie ligula tortor, at congue mauris porta id. Nullam aliquam vestibulum porta. Integer sagittis nulla nisi. Quisque semper enim urna, non dignissim justo efficitur non.</p>
          <h5>items</h5>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
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



