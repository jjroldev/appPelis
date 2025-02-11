import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({ children, redirectTo = '/login' }: ProtectedRouteProps) {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to={redirectTo} />;
    }

    return children ? children : <Outlet />;
}
