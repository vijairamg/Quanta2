import firebase from 'firebase'
require('firebase/auth')

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";


const config = {
    apiKey: "AIzaSyDMC-y7MNJ5mhwEBkytnANyG3CeSu-KIbI",
    authDomain: "quanta2.firebaseapp.com",
    databaseURL: "https://quanta2.firebaseio.com",
    projectId: "quanta2",
    storageBucket: "quanta2.appspot.com",
    messagingSenderId: "1072719630100",
    appId: "1:1072719630100:web:bd228931c6b57dd7"
  };

  firebase.initializeApp(config);
  var auth = firebase.auth();
  export{
      auth
  };