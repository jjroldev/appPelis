import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
const MiLista = lazy(() => import("./MiLista/MiLista"));
const Buscar = lazy(() => import("./Buscar/Buscar"));
const Home = lazy(() => import("./Home/Home"));
const ManagePerfil = lazy(() => import("./ManagePerfil/ManagePerfil"))
const InfoMovie = lazy(() => import('./InfoMovie/InfoMovie'))
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
export const PrivateRoutes = () => {
    const navigate = useNavigate()
    const { currentPerfil } = useAuth()
    const location = useLocation()
    useEffect(() => {
        if (!currentPerfil && location.pathname != "/manageProfiles") {
            toast("Selecciona primero un perfil para poder entrar");
            navigate('/manageProfiles', { replace: true })
        }
    }, [currentPerfil])
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