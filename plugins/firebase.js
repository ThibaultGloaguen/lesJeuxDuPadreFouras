// plugins/firebase.js
import * as firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCVMC8iuuMjwx71yZ_VhF5ZqfqdD92ebOk",
    authDomain: "fouras-summer-636dc.firebaseapp.com",
    databaseURL: "https://fouras-summer-636dc.firebaseio.com",
    projectId: "fouras-summer-636dc",
    storageBucket: "fouras-summer-636dc.appspot.com",
    messagingSenderId: "1021105757871",
    appId: "1:1021105757871:web:4302ef36bf490ad3"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export {
  db,
  firebase,
}