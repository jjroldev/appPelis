import './App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner/Spinner';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { useQuery } from 'react-query';
import { getPerfilesPorUsuario } from './firebase';
import { Perfil } from './interface/Perfil';

const PageLogin = lazy(() => import("./pages/PageLogin/PageLogin"));
const PageRegister = lazy(() => import("./pages/PageRegister/PageRegister"));
const MiLista = lazy(() => import("./pages/MiLista/MiLista"));
const Buscar = lazy(() => import("./pages/Buscar/Buscar"));
const Home = lazy(() => import("./pages/Home/Home"));
const ManagePerfil = lazy(() => import("./pages/ManagePerfil/ManagePerfil"));
const InfoWindow = lazy(() => import('./pages/InfoWindow/InfoWindow'));
const MoviesWindow = lazy(() => import('./pages/MoviesWindow/MoviesWindow'));
const SeriesWindow = lazy(() => import('./pages/SeriesWindow/SeriesWindow'));
const CreateProfile = lazy(() => import('./pages/CreateProfile/CreateProfile'));

export default function App() {
  const { isLoggedIn, loading, currentPerfil, currentUser } = useAuth();

  const { data: perfiles = [] } = useQuery<Perfil[]>(
    `perfiles-${currentUser?.id}`,
    () => getPerfilesPorUsuario(currentUser?.id),
    {
      staleTime: 0,
      enabled: !!currentUser?.id
    }
  );

  if (loading) return null;

  return (
    <HashRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ?
              (currentPerfil && perfiles.length
                ? "/home"
                : "/manageProfiles") : "/login"}
              replace />}
          />

          <Route path="login" element={<PageLogin />} />
          <Route path="register" element={<PageRegister />} />

          <Route element={<ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login" />}>
            <Route path="manageProfiles" element={<ManagePerfil />} />
            <Route path="createProfile" element={<CreateProfile />} />
            <Route element={<ProtectedRoute isAllowed={currentPerfil != null} redirectTo="/manageProfiles" />}>
              <Route path="home" element={<Home />} />
              <Route path="miLista" element={<MiLista />} />
              <Route path="buscar" element={<Buscar />} />
              <Route path="movies" element={<MoviesWindow />} />
              <Route path="series" element={<SeriesWindow />} />
              <Route path="movie/:movieId" element={<InfoWindow type="movie" />} />
              <Route path="serie/:seriesId" element={<InfoWindow type="serie" />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
