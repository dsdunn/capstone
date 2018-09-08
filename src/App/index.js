import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from '../Header'
<<<<<<< HEAD
import Login from '../Login'
import Signup from '../Signup'
=======
import Login from '../Login';
import SignUp from '../SignUp';
>>>>>>> Write signUp handle change to update state

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={'/logIn'} component={Login} />
<<<<<<< HEAD
        <Route exact path={'/Signup'} component={Signup} />
=======
        <Route exact path={'/SignUp'} component={SignUp} />
>>>>>>> Write signUp handle change to update state
        collecshare
      </div>
    );
  }
}

export default App;
