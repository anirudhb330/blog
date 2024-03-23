import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/login.css'

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button className="login-button"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
    )
  );
};
