import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './reducers'
import { styles } from './utils'

export default class PostList extends React.Component {
  render() {
    return (
      <Provider store={
        createStore(reducer, 
        devToolsEnhancer({suppressConnectErrors: false,})
        )
      }>
        <View style={styles.container}>
          <Text>Here's the list...</Text>
        </View>
      </Provider>
    )
  }
}
