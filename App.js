import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Config from 'react-native-config';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
