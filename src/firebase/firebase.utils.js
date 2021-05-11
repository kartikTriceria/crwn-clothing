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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  console.log(snapshot)
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
