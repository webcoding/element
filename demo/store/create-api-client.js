import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}

console.log('client api')
const version = '/v0'

Firebase.initializeApp(config)
const api = Firebase.database().ref(version)
export default api
