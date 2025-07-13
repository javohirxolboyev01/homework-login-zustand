import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./zustand/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  allowedRoles = [],
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();


  if (requireAuth && !isAuthenticated()) {
   
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 