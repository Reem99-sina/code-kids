import { useUser } from "@/hooks/user.hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
