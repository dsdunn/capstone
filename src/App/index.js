import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './normalize.css';
import './styles.css';
import Header from '../Header'
import UserProfile from '../UserProfile'
import Login from '../Login';
import Signup from '../Signup';
import EditProfile from '../EditProfile';
import LandingPage from '../LandingPage';
import CollectionBig from '../CollectionBig';
import AddCollection from '../AddCollection';
import CollectionsContainer from '../CollectionsContainer';
import EditCollection from '../EditCollection';
import { connect } from 'react-redux';
import { signIn, setProfile } from '../actions';
import { getUserInfo } from '../services/fetch';
import { firebase } from '../firebase';


export class App extends Component {
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        getUserInfo(authUser.uid)
          .then(user => {
            this.props.signIn(user)
            this.props.setProfile(user)
          })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path={'/user/addcollection'} component={AddCollection} />
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/login'} render={() => (<div><LandingPage/><Login/></div>)} />
        <Route exact path={'/user/login'} render={() => (<div><UserProfile/><Login/></div>)} />
        <Route exact path={'/home/login'} render={() => (<div><CollectionsContainer/><Login/></div>)} />
        <Route path={'/signup'} render={() => (<div><LandingPage/><Signup/></div>)} />
        <Route path={'/user/signup'} render={Signup} />
        <Route path={'/home/signup'} component={Signup} />
        <Route path={'/user'} component={UserProfile} />
        <Route path={'/user/editprofile'} component={EditProfile} />
        <Route path={'/home/editprofile'} component={EditProfile} />
        <Route path={'/collection'} component={CollectionBig}/>
        <Route path={'/home'} component={CollectionsContainer}/>
        <Route path={'/collection/editcollection'} component={EditCollection}/>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signIn: (userId) => dispatch(signIn(userId)),
  setProfile: (user) => dispatch(setProfile(user))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
