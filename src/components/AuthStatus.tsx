import React from "react";
import { useAuth } from "./zustand/store";

const AuthStatus: React.FC = () => {
  const { token, isAuthenticated } = useAuth();

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded text-xs z-50">
      <div>Auth: {isAuthenticated() ? "✅" : "❌"}</div>
      <div>Token: {token ? "✅" : "❌"}</div>
    </div>
  );
};

export default AuthStatus; 