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
import Dashboard from '../Dashboard';


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
        <Route path={'/signup'} component={Signup} />
        <Route path={'/user'} component={UserProfile} />
        <Route path={'user/editprofile'} component={EditProfile} />
        <Route path={'/collection'} component={CollectionBig}/>
        <Route path={'/home'} component={CollectionsContainer}/>
      </div>
    );
  }
}

export default withRouter(App);
