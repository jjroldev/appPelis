import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean| undefined;
  redirectTo: string;
}

export const ProtectedRoute = ({ isAllowed, redirectTo }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet />;
};
