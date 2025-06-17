import { useUser } from "@/hooks/user.hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) {

    return <p>loading.....</p>;
  } else if (user) {

    return <Outlet />;
  } else {
    
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
