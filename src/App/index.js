import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from '../Header'
import Login from '../Login'
import Signup from '../Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={'/logIn'} component={Login} />
        <Route exact path={'/Signup'} component={Signup} />
        collecshare
      </div>
    );
  }
}

export default App;
