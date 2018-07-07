import { AsyncStorage } from 'react-native'

export const TA_MOBILE_STORAGE_KEY = 'TAMobile:postsv1'
const api = process.env.TA_MOBILE_API_URL

export const fetchPosts = () => {
  return fetch(`${api}/posts`, { headers })
  .then((res) => res.json())
}

export const fetchPost = key => {
}

export const fetchSavedPosts = () => {
  return AsyncStorage.getItem(TA_MOBILE_STORAGE_KEY)
    .then(results => {
      return JSON.parse(results)
    })
}

export const fetchSavedPost = key => {
  return AsyncStorage.getItem(TA_MOBILE_STORAGE_KEY)
    .then(results => {
      let posts = JSON.parse(results)
      return posts[key]
    })
}

export const savePost = key => {
}


 * Function scraped from Stack Overflow: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {string}
 */

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
