import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../utils/styles'
import { fetchPosts } from '../utils/TaMobileApi'

class AddPost extends React.Component {

  componentDidMount(){
    let posts = fetchPosts();
    console.log(posts)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add a post here...</Text>
      </View>
    )
  }
}

function mapStateToProps (state){
  return {
    posts: state.posts
  }
}

export default connect (mapStateToProps,)(AddPost)
