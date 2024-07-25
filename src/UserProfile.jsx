import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseUtils'; // adjust the path if needed

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      {user && (
        <>
          <p>Username: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="Avatar" />
        </>
      )}
    </div>
  );
};

export default UserProfile;