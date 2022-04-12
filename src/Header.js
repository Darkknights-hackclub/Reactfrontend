import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Funds from "./Crowdfunding";
import Signup from "./Signup";
import Mypets from "./Mypets";
const Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="funds" element={<Funds />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Mypets" element={<Mypets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Header;

