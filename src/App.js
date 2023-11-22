import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/utils/AuthContext";
import "./css/grid.css";
import "./css/style.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Explore from "./components/Explore/Explore";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  const { profileId } = useParams();
  return (
    <AuthProvider>
      <div className="row">
        <div className="gap" />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route path="/profile/:profileId" element={<Profile />} />
          </Route>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
