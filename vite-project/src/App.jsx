import { Route, Routes } from "react-router-dom";
import WalletConnect from "./components/WalletConnect";
import Home from "./components/Home";
import SignUp from "./components/SIgnup";
import Login from "./components/Login";
import FriendRequests from "./components/FriendRequests";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="container mx-auto">
      <WalletConnect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/:publicKey" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendRequests />} />
      </Routes>
    </div>
  );
};

export default App;
