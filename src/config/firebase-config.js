import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyANiN0M2GZ050z87dZcLrMkWp_NICGslO0",
  authDomain: "fir-react-5c8c5.firebaseapp.com",
  projectId: "fir-react-5c8c5",
  storageBucket: "fir-react-5c8c5.appspot.com",
  messagingSenderId: "449913750251",
  appId: "1:449913750251:web:b635721ef3a125ff1ff4ae",
  measurementId: "G-LW7FXY8RJS"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;