import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { login, setAuthHeader } from "../services/server";

function AuthProvider({ children }) {
  const [isReady, setIsReady] = useState(false);
  const [activeUser, setActiveUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null
  );
  const [token, setToken] = useState(localStorage.token);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthHeader(token);
    setIsReady(true);
  }, [token]);

  useEffect(() => {
    setAuthHeader(token);
  }, [token]);

  async function handleLogin(username, password) {
    const { user, token } = await login(username, password);
    localStorage.activeUser = JSON.stringify(user);
    localStorage.token = token;
    setActiveUser(user);
    setToken(token);
    navigate("/notes");
  }

  async function handleLogout(e) {
    localStorage.removeItem("activeUser");
    localStorage.removeItem("token");
    setActiveUser(null);
    setToken(null);
  }

  if (!isReady) return null;

  return (
    <AuthContext.Provider
      value={{
        activeUser,
        onLogin: handleLogin,
        onLogout: handleLogout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
