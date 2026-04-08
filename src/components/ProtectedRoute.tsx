import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const role = localStorage.getItem("auth_role");
  if (role !== "admin") return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
