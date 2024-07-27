import React, { useState } from "react";
import { auth } from "../firebaseUtils.js"; 

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";
import { redirect } from "react-router-dom";
import {} from '../suprSendConfig.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const  handleEmailLogin = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Handle successful login
        signInWithEmailAndPassword(userCredential)
        
    
        

      })
      .catch((error) => {
        // Handle login error
        console.error("Error logging in with email and password:", error);
      });
      console.log("Logged in with email and password");
        const event = {
          distinct_id: user.uid,
          event: 'user_signup',
          properties: {
            email: user.email,
            signup_time: new Date().toISOString(),
          }
        };

      supersend.identify(user.uid);
      await suprsend.track("Event Name",event);
      console.log('Signup notification sent successfully');
      

    const user= userCredential.user;

    

    await updateProfile(user, {displayName: username});
    
  };
  
  const provider= new GoogleAuthProvider()
  


  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Handle successful login
        console.log("Logged in with Google");
        const user= userCredential.user;
        
        
      })
      .catch((error) => {
        // Handle login error
        console.error("Error logging in with Google:", error);
      });

      redirect('/')
  };

  return (
    <div className="container mt-5" style={{backgroundColor:'lightgoldenrodyellow', minHeight:'90vh'}}>
      <h1>Registration</h1>
      <form onSubmit={handleEmailLogin}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-10 my-2"
          onChange={handleEmailChange}
        />
        </div>
        <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-10 my-2"
          onChange={handlePasswordChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">Login with Email</button>
      </form>
      <button onClick={handleGoogleLogin} className="btn btn-danger mt-3">Login with Google</button>
    </div>
  );
}

export default Registration;
