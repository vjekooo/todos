
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBStejTPEWleFpmaR8QbP3jakzE4uf_rjI',
  authDomain: 'todos-9a7da.firebaseapp.com',
  databaseURL: 'https://todos-9a7da.firebaseio.com'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
