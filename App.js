import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducers'
import { styles } from './utils/styles'
import PostList from './components/PostList'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={
        createStore(reducer, 
        devToolsEnhancer({suppressConnectErrors: false,})
        )
      }>
        <View style={styles.container}>
          <Text>Yo Beren - Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    )
  }
}
