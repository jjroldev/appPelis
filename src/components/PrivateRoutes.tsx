import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import Spinner from './Spinner/Spinner';

const MiLista = lazy(() => import("./MiLista/MiLista"));
const Buscar = lazy(() => import("./Buscar/Buscar"));
const Home = lazy(() => import("./Home/Home"));
const ManagePerfil = lazy(() => import("./ManagePerfil/ManagePerfil"));
const InfoMovie = lazy(() => import('./InfoMovie/InfoMovie'));

export const PrivateRoutes = () => {
    const navigate = useNavigate();
    const { currentPerfil, isLoggedIn, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Spinner />; // Mostrar un spinner mientras Firebase verifica autenticación
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    useEffect(() => {
        if (!currentPerfil && location.pathname !== "/manageProfiles") {
            toast("Selecciona primero un perfil para poder entrar");
            navigate('/manageProfiles', { replace: true });
        }
    }, [currentPerfil]);

    return (
        <Routes>
            <Route path='home' element={<Suspense fallback={<Spinner />}><Home /></Suspense>} />
            <Route path='miLista' element={<Suspense fallback={<Spinner />}><MiLista /></Suspense>} />
            <Route path='buscar' element={<Suspense fallback={<Spinner />}><Buscar /></Suspense>} />
            <Route path='manageProfiles' element={<Suspense fallback={<Spinner />}><ManagePerfil /></Suspense>} />
            <Route path='info' element={<Suspense fallback={<Spinner />}><InfoMovie /></Suspense>} />
            <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
    );
};
