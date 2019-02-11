import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCkLDLugT8Gx76YKjNJiIMiCYreAheyYB4",
  authDomain: "membership-air.firebaseapp.com",
  databaseURL: "https://membership-air.firebaseio.com",
  projectId: "membership-air",
  storageBucket: "membership-air.appspot.com",
  messagingSenderId: "761093515353"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;