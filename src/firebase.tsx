// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB8gQgInnJagkk-lgbpRySRwv9Rpqip9UE',
  authDomain: 'starwars-api-d0935.firebaseapp.com',
  projectId: 'starwars-api-d0935',
  storageBucket: 'starwars-api-d0935.appspot.com',
  messagingSenderId: '585589794217',
  appId: '1:585589794217:web:aabe5f0a16218950f990b8',
  measurementId: 'G-GGVRSJPSVK',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
