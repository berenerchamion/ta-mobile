import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../utils/styles'

class PostList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Here's the list...</Text>
      </View>
    )
  }
}

function mapStateToProps (state){
  return {
    posts: state.posts
  }
}

export default connect (mapStateToProps,)(PostList)
