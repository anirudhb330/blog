import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../styles/userProfile.css'

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <div class="profile">
      <div class="profile-pic">
         <img src={user.picture} alt={user.name} />
      </div>
      <div class="profile-details">
         <h2>{user.nickname}</h2>
         <p>{user.email}</p>
      </div>
    </div>

    )
  );
};

export default UserProfile;
