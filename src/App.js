import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Route, HashRouter, Switch } from 'react-router-dom';

import Home from './comps/Home/Home'
import Contact from './comps/Contact/Contact'
import Profile from './comps/Profile/Profile'

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter> 
         <div className="App">
          <Switch>  42G

            <Route exact path="/" component={Home}/> {/* 42F */}
            <Route path='/contact' component={Contact}/> {/* 42H */}
            <Route path='/profile/:contactName' component={Profile}/> {/* 42H */}
            

          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
