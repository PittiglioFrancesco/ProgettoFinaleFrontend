import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./components/utils/AuthContext";

const PrivateRoutes = ({ children }) => {
  let { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
