import React, { useState } from 'react';

import { auth } from '../firebaseUtils';
import 'bootstrap/dist/css/bootstrap.min.css'
import suprsend from '../suprSendConfig'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth,email, password);


      const event = {
        distinct_id: user.uid,
        event: 'user_login',
        properties: {
          email: user.email,
          login_time: new Date().toISOString(),
        }
      };
      suprsend.identify(user.uid);
  
      suprsend.track("Event Name",event);
      console.log('Login notification sent successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5" style={{backgroundColor:'lightgoldenrodyellow', minHeight:'90vh'}}>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <div className="form-group">
          <label htmlFor="email"style={{margin:'10px'}}>Email</label>
          <input
            type="email"
            className="w-10 my-2"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{margin:'10px'}}>Password</label>
          <input
            type="password"
            className="w-10 my-2"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" style={{margin:'50px'}}>
          Login with Email
        </button>
      </form>
    </div>
  );
};

export default Login;
