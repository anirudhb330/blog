import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/Homepage";

function App() {
  const { isLoading } = useAuth0();
  return isLoading ? (
    <div>Loading..</div>
  ) : (
    <>
      <Login />
      <HomePage />
      <Logout />
      <UserProfile />
    </>
  );
}

export default App;
