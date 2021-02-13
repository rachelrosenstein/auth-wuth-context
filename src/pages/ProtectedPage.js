import React, { useContext } from "react";
import { AuthContext } from "../utils/context";

export const ProtectedResource = () => {
  const authContext = useContext(AuthContext);
  return authContext.isLoggedIn && <h2>Protected resource</h2>;
};
