import firebase from 'firebase';
  
//web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhKfGT4ciOG8SoOKoLTEsWkS8qw4aLFFo",
  authDomain: "coincreatif-a2f2d.firebaseapp.com",
  projectId: "coincreatif-a2f2d",
  storageBucket: "coincreatif-a2f2d.appspot.com",
  messagingSenderId: "586336001894",
  appId: "1:586336001894:web:38808f8b278adfb3f3f2a7",
  measurementId: "G-GBNM68H2SQ"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
