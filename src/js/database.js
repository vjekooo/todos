
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBStejTPEWleFpmaR8QbP3jakzE4uf_rjI',
  authDomain: 'todos-9a7da.firebaseapp.com',
  databaseURL: 'https://todos-9a7da.firebaseio.com',
  projectId: 'todos-9a7da',
  storageBucket: 'todos-9a7da.appspot.com',
  messagingSenderId: '165465697063'
}

firebase.initializeApp(config)

export const database = firebase.database()
