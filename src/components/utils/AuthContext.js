import { useContext, useState, useEffect, createContext } from "react";
import { loginCall } from "../../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginUser = (loginData) => {
    setLoading(true);
    try {
        let account = loginCall(loginData);
        sessionStorage.setItem("token", account.token)
        setUser(account);
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = () => {};

  const registerUser = (userInfo) => {};

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;
