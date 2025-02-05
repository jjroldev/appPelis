import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import { AuthProvider, useAuth } from './context/AuthContext';
import { EmailProvider } from './context/ExistsEmailContext';
import { Toaster } from 'react-hot-toast';
import { SearchProvider } from './context/SearchContext';
import { LanguageProvider } from './context/LanguageContext';
import { QueryClient, QueryClientProvider } from 'react-query';
function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {isLoggedIn ? <Route path="/*" element={<PrivateRoutes />} /> : <Route path="/*" element={<PublicRoutes />} />}
      <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
    </Routes>
  );
}

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <EmailProvider>
            <SearchProvider>
              <BrowserRouter basename='/appPelis'>
                <Toaster position="bottom-right" reverseOrder={false} />
                <AppRoutes />
              </BrowserRouter>
            </SearchProvider>
          </EmailProvider>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
