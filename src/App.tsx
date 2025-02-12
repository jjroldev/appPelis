import './App.css';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { lazy } from 'react';
import Spinner from './components/Spinner/Spinner';
import { ProtectedRoute } from './ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAuth } from './context/AuthContext';

const PageLogin = lazy(() => import("./components/PageLogin/PageLogin"));
const PageRegister = lazy(() => import("./components/PageRegister/PageRegister"));
const MiLista = lazy(() => import("./components/MiLista/MiLista"));
const Buscar = lazy(() => import("./components/Buscar/Buscar"));
const Home = lazy(() => import("./components/Home/Home"));
const ManagePerfil = lazy(() => import("./components/ManagePerfil/ManagePerfil"));
const InfoMovie = lazy(() => import('./components/InfoMovie/InfoMovie'));
export default function App() {
  const queryClient = new QueryClient();
  const { isLoggedIn, loading,currentPerfil } = useAuth();
  if (loading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? (currentPerfil? "/home":"/manageProfiles"):"/login"} replace />}
          />
          <Route path="login" element={<Suspense fallback={<Spinner />}><PageLogin /></Suspense>} />
          <Route path="register" element={ <Suspense fallback={<Spinner />}><PageRegister /></Suspense>} />
          <Route element={<ProtectedRoute />}>
            <Route path='home' element={<Suspense fallback={<Spinner />}><Home /></Suspense>} />
            <Route path='miLista' element={<Suspense fallback={<Spinner />}><MiLista /></Suspense>} />
            <Route path='buscar' element={<Suspense fallback={<Spinner />}><Buscar /></Suspense>} />
            <Route path='manageProfiles' element={<Suspense fallback={<Spinner />}><ManagePerfil /></Suspense>} />
            <Route path="/:movieId" element={<Suspense fallback={<Spinner />}><InfoMovie /></Suspense>} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}
