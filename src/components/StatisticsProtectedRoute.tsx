import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./zustand/store";

interface StatisticsProtectedRouteProps {
  children: React.ReactNode;
}

const StatisticsProtectedRoute: React.FC<StatisticsProtectedRouteProps> = ({
  children,
}) => {
  const { token } = useAuth();
  const location = useLocation();


  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default StatisticsProtectedRoute; 