import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDaGojWVa0h4Fu5dYRh1YZTzJysfB_e1M8",
  authDomain: "collecshare.firebaseapp.com",
  databaseURL: "https://collecshare.firebaseio.com",
  projectId: "collecshare",
  storageBucket: "collecshare.appspot.com",
  messagingSenderId: "480313504695"
};

firebase.initializeApp(config);


const auth = firebase.auth();

export {
  auth
};