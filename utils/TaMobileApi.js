import { AsyncStorage } from 'react-native'

export const TA_MOBILE_STORAGE_KEY = 'TAMobile:postsv1'

export const fetchPosts = () => {
  return AsyncStorage.getItem(TA_MOBILE_STORAGE_KEY)
    .then(results => {
      return JSON.parse(results)
    })
}

export const fetchPost = key => {
  return AsyncStorage.getItem(TA_MOBILE_STORAGE_KEY)
    .then(results => {
      let posts = JSON.parse(results)
      return posts[key]
    })
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
