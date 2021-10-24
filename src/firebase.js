import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAmNrBPPFLMg-3brbw0_OZMvbfOjMNfMOM',
  authDomain: 'cheesehackathon.firebaseapp.com',
  projectId: 'cheesehackathon',
  storageBucket: 'cheesehackathon.appspot.com',
  messagingSenderId: '476080843828',
  appId: '1:476080843828:web:a942747ccffec6f6a8ee61',
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// export const auth = app.auth()
export const db = app.firestore()
export const storage = app.storage()
export default app
