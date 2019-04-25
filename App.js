import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Config from 'react-native-config';
import reducers from './src/reducers';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Welcome to React Native! {Config.API_URL }</Text>
        </View>
      </Provider>
    );
  }
}
