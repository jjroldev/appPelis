import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner/Spinner';

const PageLogin = lazy(() => import("./PageLogin/PageLogin"));
const PageRegister = lazy(() => import("./PageRegister/PageRegister"));

export const PublicRoutes = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) {
        return <Spinner />; // Mostrar un spinner mientras Firebase verifica autenticación
    }

    if (isLoggedIn) {
        return <Navigate to="/manageProfiles" replace />;
    }

    return (
        <Routes>
            <Route path='login' element={<Suspense fallback={<Spinner />}><PageLogin /></Suspense>} />
            <Route path="register" element={<Suspense fallback={<Spinner />}><PageRegister /></Suspense>} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};
