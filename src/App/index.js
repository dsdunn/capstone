import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from '../Header'
import Login from '../Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={'/logIn'} component={Login} />
        collecshare
      </div>
    );
  }
}

export default App;
