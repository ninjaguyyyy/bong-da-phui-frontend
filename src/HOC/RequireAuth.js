import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user);

  if (!user.isLogged) {
    return <Navigate to="/account" state={{ from: location }} replace />;
  }

  return <MainLayout>{children}</MainLayout>;
};

export default RequireAuth;
