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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path={'/addcollection'} component={AddCollection} />
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/login'} render={() => (<div><LandingPage/><Login/></div>)} />
        <Route exact path={'/user/login'} render={() => (<div><UserProfile/><Login/></div>)} />
        <Route exact path={'/home/login'} render={() => (<div><CollectionsContainer/><Login/></div>)} />
        <Route exact path={'/signup'} render={() => (<div><LandingPage/><Signup/></div>)} />
        <Route exact path={'/user/signup'} render={() => (<div><UserProfile/><Signup/></div>)} />
        <Route exact path={'/home/signup'} render={() => (<div><CollectionsContainer/><Signup/></div>)} />
        <Route path={'/user'} component={UserProfile} />
        <Route path={'/user/editprofile'} component={EditProfile} />
        <Route path={'/collection'} component={CollectionBig}/>
        <Route path={'/home'} component={CollectionsContainer}/>
      </div>
    );
  }
}

export default withRouter(App);
