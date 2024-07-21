// Logout.js
import React, { useContext } from 'react';
import UserContext from './Context';

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null); // Set current user to null or whatever your default user state is
    window.location.href = '/createaccount'; // Redirect to create account page
  };

  return (
    <button className="nav-link logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
