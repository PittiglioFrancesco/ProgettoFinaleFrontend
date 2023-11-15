import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContentArea from "./components/ContentArea/ContentArea";
import ForYou from "./components/ForYou/ForYou";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar/Sidebar";
import "./css/grid.css";
import "./css/style.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Explore from "./components/Explore/Explore";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="row">
      <div className="gap" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
