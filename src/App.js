import React, { useState } from "react";
import { ProtectedResource } from "./pages/ProtectedPage";
import { Authentication } from "./utils/AuthHeader";
import { AuthContext } from "./utils/context";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: loggedIn, login: login, logout: logout }}
    >
      <Authentication />
      <ProtectedResource />
    </AuthContext.Provider>
  );
}
