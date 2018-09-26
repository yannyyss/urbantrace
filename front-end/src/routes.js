import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

//Auth:
import SignUp from './components/auth/signup';
import Login from './components/auth/login';
import Private from './components/auth/private';

//Components
import Home from './components/Home/Home';
import Navbar from './components/Layout/Layouts/Navbar';
import Main from './components/Layout/Layouts/Main';
import Footer from './components/Layout/Layouts/Footer';

export default () => <Router>
  <Switch>
    <Route exact path = '/home' component = {Home}/>
    <Route path = '/signup' component = {SignUp}/>
    <Route path = '/login' component = {Login}/>
    <Route path = '/private' component = {Private}/>
    <Route path = '/navbar' component = {Navbar}/>
    <Route path = '/main' component = {Main}/>
    <Route path = '/footer' component = {Footer}/>
  </Switch>
</Router>
