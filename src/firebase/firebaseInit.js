import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig);
var database = firebaseApp.firestore();
var storage = firebaseApp.storage();

export { database, storage }
