import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import NavBar from './Layouts/Navbar';
import Signup from '../auth/signup';
import Login from '../auth/login';

const layout = props => (
  <Aux>
        <NavBar/>
        <Signup/>
  </Aux>
);

export default layout;