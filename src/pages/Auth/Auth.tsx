import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../components/zustand/store";

const Auth = () => {
  const { token } = useStore();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;
