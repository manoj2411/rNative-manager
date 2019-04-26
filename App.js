import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Config from 'react-native-config';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: Config.ApiKey,
      authDomain: Config.AuthDomain,
      databaseURL: Config.DatabaseURL,
      projectId: Config.ProjectId,
      storageBucket: Config.StorageBucket,
      messagingSenderId: Config.MessagingSenderId
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
