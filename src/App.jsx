import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Home from "./pages/Home";
import About from "./pages/About";
import  Dashboard  from "./pages/Dashboard";


function App() {
  const { isLoading } = useAuth0();
  return isLoading ? (
    <div>Loading..</div>
  ) : (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    <UserProfile />

    </>
  );
}

export default App;
