import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../styles/UserProfile.css';  

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='user-profile'>
        <img src={user.picture} alt={user.name} className="profile-pic" />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-email">{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;
