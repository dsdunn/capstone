import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from '../Header'
import UserProfile from '../UserProfile'
import Login from '../Login';
import SignUp from '../SignUp';
import EditProfile from '../EditProfile';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={'/user'} component={UserProfile} />
        <Route exact path={'/user/editprofile'} component={EditProfile} />
      </div>
    );
  }
}

export default App;
