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








const app=initializeApp(firebaseConfig);

const auth= getAuth(app)

export  {auth} ;