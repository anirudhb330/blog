import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="login">
      <button className="login-btn"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
      </div>
    )
  );
};
