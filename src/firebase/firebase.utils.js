import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB_QhpkZV8wGATJjGjTCFdvRtzIAnDwWik',
  authDomain: 'shopapp-47ca8.firebaseapp.com',
  databaseURL: 'https://shopapp-47ca8-default-rtdb.firebaseio.com',
  projectId: 'shopapp-47ca8',
  storageBucket: 'shopapp-47ca8.appspot.com',
  messagingSenderId: '590675817474',
  appId: '1:590675817474:web:349f63603dffae2162a31b'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
