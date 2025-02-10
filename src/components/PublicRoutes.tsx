import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner/Spinner';
import { useLocation } from 'react-router-dom';
const PageLogin = lazy(() => import("./PageLogin/PageLogin"));
const PageRegister = lazy(() => import("./PageRegister/PageRegister"));

export const PublicRoutes = () => {
    const { isLoggedIn, loading,currentPerfil } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Spinner />; 
    }

    if (isLoggedIn) {
        return <Navigate to={currentPerfil ? location.pathname : "/manageProfiles"} replace />;
    }
    return (
        <Routes>
            <Route path='login' element={<Suspense fallback={<Spinner />}><PageLogin /></Suspense>} />
            <Route path="register" element={<Suspense fallback={<Spinner />}><PageRegister /></Suspense>} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};
