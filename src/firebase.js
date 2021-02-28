import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZKJ0lxQdMJ7bPhDYFC3-p2bZGtC_bME0",
  authDomain: "facebook-messenger-clone-pr1.firebaseapp.com",
  projectId: "facebook-messenger-clone-pr1",
  storageBucket: "facebook-messenger-clone-pr1.appspot.com",
  messagingSenderId: "624268750844",
  appId: "1:624268750844:web:ad43d247937f60a110cc79",
  measurementId: "G-94W8SDK3J2"

})

const db =firebaseApp.firestore();
export default db;