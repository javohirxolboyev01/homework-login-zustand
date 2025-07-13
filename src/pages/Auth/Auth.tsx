import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../components/zustand/store";

const Auth = () => {
  const isAuthenticated = useAuth((s) => s.isAuthenticated());
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Auth;
