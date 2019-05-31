// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

class DataService {
  static db
  static auth

  static init () {
    const firebaseConfig = {
      apiKey: 'AIzaSyCDJo-Q-tZyBm5ggcHKAeKU4s8HSfdljbI',
      authDomain: 'materialreact512.firebaseapp.com',
      databaseURL: 'https://materialreact512.firebaseio.com',
      projectId: 'materialreact512',
      storageBucket: 'materialreact512.appspot.com',
      messagingSenderId: '924935119837',
      appId: '1:924935119837:web:f7dc79ec450117a2'
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    this.db = firebase.firestore()
    this.auth = firebase.auth()
  }

  static read () {
    this.db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data())
      })
    })
  }

  static write () {
    this.db.collection('users').add({
      first: 'Ada', last: 'Lovelace', born: 1815
    })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  static watchAuthentication () {
    this.auth.onAuthStateChanged((user) => {
      console.log('user:', user)
      if (user) {
        console.log('Logged in!')
      } else {
        console.log('Logged out!')
      }
    })
  }
}

export default DataService
