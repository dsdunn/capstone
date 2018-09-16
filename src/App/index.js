import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
        <Route path={'/landing'} component={LandingPage} />
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/user'} component={UserProfile} />
        <Route exact path={'/editprofile'} component={EditProfile} />
        <Route path={'/collection'} component={CollectionBig}/>
        <Route path={'/collectionsContainer'} component={CollectionsContainer}/>
      </div>
    );
  }
}

export default withRouter(App);
