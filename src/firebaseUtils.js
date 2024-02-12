import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.REACT_API_KEY,
  authDomain: import.meta.env.REACT_AUTH_DOMAIN,
  projectId: "react-ecommerce-d13c1",
  storageBucket: "react-ecommerce-d13c1.appspot.com",
  messagingSenderId:import.meta.env.MESSAGE_SENDER_ID,
  appId: import.meta.env.APP_ID
};



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDdk78sbOWBbGTclZhAPou3xkUAS5NE4g8",
//   authDomain: "react-ecommerce-d13c1.firebaseapp.com",
//   projectId: "react-ecommerce-d13c1",
//   storageBucket: "react-ecommerce-d13c1.appspot.com",
//   messagingSenderId: "1070320056926",
//   appId: "1:1070320056926:web:2ff2ae49071853790212cf"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);






const app=initializeApp(firebaseConfig);

const auth= getAuth(app)

export  {auth} ;