import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyA_u--hLfB9dcbIUL5iEOxy_z2JHxeWqWI",
    authDomain: "tohacks-9ce10.firebaseapp.com",
    projectId: "tohacks-9ce10",
    storageBucket: "tohacks-9ce10.appspot.com",
    messagingSenderId: "925065345878",
    appId: "1:925065345878:web:65e3eab438de2b45aaf4f7",
    measurementId: "G-4F45EP8F1M"
  };
  // Initialize Firebase
  const fireb=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fireb;