// UserNav.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseUtils'; 

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoURL} alt="Avatar" style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '8px' }}>{user.displayName}</span>
          <button onClick={handleSignOut} style={{ marginLeft: '8px' }}>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className='text-decoration-none text-dark'>Login</Link>
      )}
    </div>
  );
};

export default User;