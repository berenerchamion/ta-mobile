import {
    FETCH_POSTS
} from '../actions'

const initialState = {
    posts: [],
}

function posts (state=initialState, action){
    const { posts } = action
    const { post } = action

    switch(action.type){
        case FETCH_POSTS:
        return {
            ...state,
            posts: Object.keys(posts).map(function(k) { return posts[k] })
        }
        default:
        return{
            ...state
        }
    }
}

export default posts
