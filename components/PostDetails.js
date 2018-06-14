import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../utils/styles'

class PostDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Here's the post details...</Text>
      </View>
    )
  }
}

function mapStateToProps (state){
  return {
    posts: state.posts
  }
}

export default connect (mapStateToProps,)(PostDetails)
