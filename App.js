import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store/Store'
import Setup from './src/Setup'




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}

export default App