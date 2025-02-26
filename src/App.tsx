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
const EditProfile = lazy(() => import('./pages/EditProfile/EditProfile'))
const Watch = lazy(() => import('./pages/Watch/Watch'))
const ItemsActor =lazy(()=>import('./pages/ItemsActor/ItemsActor'))
const Actors = lazy(()=>import('./pages/Actors/Actors'))
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
      <Toaster position="bottom-right" reverseOrder={false} />
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
            <Route path="editProfile/:profileId" element={<EditProfile />} />
            <Route element={<ProtectedRoute isAllowed={currentPerfil != null} redirectTo="/manageProfiles" />}>
              <Route path="home" element={<Home />} />
              <Route path="miLista" element={<MiLista />} />
              <Route path="buscar" element={<Buscar />} />
              <Route path="movies" element={<MoviesWindow />} />
              <Route path="series" element={<SeriesWindow />} />
              <Route path="actor/:actorId" element={<ItemsActor />} />
              <Route path="movie/:movieId" element={<InfoWindow type="movie" />} />
              <Route path="serie/:seriesId" element={<InfoWindow type="serie" />} />
              <Route path="watch/:videoId" element={<Watch />} />
              <Route path="actors" element={<Actors/>} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
