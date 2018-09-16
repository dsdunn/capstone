import React, { Component } from 'react';
import { setProfile } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch'


class CollectionBig extends Component {
  constructor(props){
    super(props);
    this.state = {
      // id: this.props.currentCollection.id,
      uid: '',
      title: '',
      description: '',
      category: ''
    }
  }

  goToProfile = () => {
    console.log('goToProf')
    getUserInfo(this.state.uid || 'kUq7VixehNQ3znsMEcPpijzWGBV2')
      // .then(response => response.json())
      .then(result => this.props.setProfile(result));
    this.props.history.push('/home/user');
  }

  render() {    
    return (
      <div className='collection-big'>
        <header className='collection-header-big'>
          <img className='collection-img-big'/>
          <img className='collection-avatar-big'/>
          <button onClick={this.goToProfile}>view profile</button>
          <h4 className='collection-title-big'>this.props.currentCollection.title</h4>
          <p className='collection-location-big'>this.state.location</p>
        </header>
        <main className='collection-body-big'>
          <section className='collection-description-big>'>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
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

export default withRouter(connect(null, mapDispatchToProps)(CollectionBig))



