import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='login'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;
