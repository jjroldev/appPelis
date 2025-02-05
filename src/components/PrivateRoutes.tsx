import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
const MiLista = lazy(() => import("./MiLista/MiLista"));
const Buscar = lazy(() => import("./Buscar/Buscar"));
const Home = lazy(() => import("./Home/Home"));
const ManagePerfil = lazy(() => import("./ManagePerfil/ManagePerfil"))
const InfoMovie=lazy(()=>import('./InfoMovie/InfoMovie'))
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
            <Route path='home' element={<Home />} />
            <Route path='miLista' element={<MiLista />} />
            <Route path='buscar' element={<Buscar />} />
            <Route path='manageProfiles' element={<ManagePerfil />} />
            <Route path='info' element={<InfoMovie />} />
        </Routes>
    );
};