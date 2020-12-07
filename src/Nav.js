import React from 'react';
import './App.css';
import Home from './Home.js';
import Login from './Login.js';

import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function Nav() {
  return (
    <>

    <Router>
    <header className ='nav'>
    <h3>GDBM</h3>
    <h3><Link to ='/Home'>Home</Link></h3>
    <h3><Link to ='/Login'>Login</Link></h3>
    </header>
    <Switch>
        <Route path='/Home'>
        <Home />
        </Route>
        <Route path='/Login'>
        <Login />
        </Route>
    </Switch>
    </Router>

  

    </>
  );
}

export default Nav;