import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
// import './styles.css'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.profile);
    // this.setState({
    //   this.props.profile
    // })
    // getUserInfo(this.props.user.uid);
  }

  render() {
    return (
      <div>
        <section className='profile-top'>
          <img className='profile-img'/>
          <h3 className='profile-display-name'></h3>
          <p className='profile-bio'></p>
          
          <Link exact='true' to={'/user/editprofile'}>
            <button className='update-bio'>edit profile</button>
          </Link>
          <Link exact='true' to={'/user/addcollection'}>
            <button className='add-collection-button'>Add a collection</button>
          </Link>

        </section>
        <section className='profile-collections'>
          your collections will go here!!!!
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  profile: state.profile
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);





