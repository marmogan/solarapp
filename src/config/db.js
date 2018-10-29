import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyCGbNSmLxguRgIzPCgKRTX02_xwLdLe5JE",
    authDomain: "seniordesignsolar-ee006.firebaseapp.com",
    databaseURL: "https://seniordesignsolar-ee006.firebaseio.com",
    projectId: "seniordesignsolar-ee006",
    storageBucket: "seniordesignsolar-ee006.appspot.com",
    messagingSenderId: "208341432008"
  };

let app = Firebase.initializeApp(config);
console.log(Firebase)
export const db = app.database();
