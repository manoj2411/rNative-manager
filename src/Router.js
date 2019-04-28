import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => (
  <Router>
   <Scene key="root">
      <Scene key="login" component={LoginForm} title="Login" />
   </Scene>
  </Router>
);

export default RouterComponent;
