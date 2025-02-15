import './App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner/Spinner';
import { ProtectedRoute } from './ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAuth } from './context/AuthContext';

const PageLogin = lazy(() => import("./pages/PageLogin/PageLogin"));
const PageRegister = lazy(() => import("./pages/PageRegister/PageRegister"));
const MiLista = lazy(() => import("./components/MiLista/MiLista"));
const Buscar = lazy(() => import("./pages/Buscar/Buscar"));
const Home = lazy(() => import("./pages/Home/Home"));
const ManagePerfil = lazy(() => import("./pages/ManagePerfil/ManagePerfil"));
const InfoWindow = lazy(() => import('./pages/InfoWindow/InfoWindow'));
const MoviesWindow = lazy(() => import('./pages/MoviesWindow/MoviesWindow'))
const SeriesWindow = lazy(() => import('./pages/SeriesWindow/SeriesWindow'))

export default function App() {
  const queryClient = new QueryClient();
  const { isLoggedIn, loading, currentPerfil } = useAuth();
  if (loading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={isLoggedIn ? (currentPerfil ? "/home" : "/manageProfiles") : "/login"} replace />}
            />
            <Route path="login" element={<PageLogin />} />
            <Route path="register" element={<PageRegister />} />
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<Home />} />
              <Route path="miLista" element={<MiLista />} />
              <Route path="buscar" element={<Buscar />} />
              <Route path="manageProfiles" element={<ManagePerfil />} />
              <Route path="/movies" element={<MoviesWindow />} />
              <Route path="/series" element={<SeriesWindow />} />
              <Route path="/movie/:movieId" element={<InfoWindow type="movie" />} />
              <Route path="/serie/:seriesId" element={<InfoWindow type="serie" />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </QueryClientProvider>
  );
}
