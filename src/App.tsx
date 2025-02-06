import './App.css';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import { AuthProvider, useAuth } from './context/AuthContext';
import { EmailProvider } from './context/ExistsEmailContext';
import { Toaster } from 'react-hot-toast';
import { SearchProvider } from './context/SearchContext';
import { LanguageProvider } from './context/LanguageContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MenuProvider } from './context/MenuContext';
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
      <MenuProvider >
        <LanguageProvider>
          <AuthProvider>
            <EmailProvider>
              <SearchProvider>
                <HashRouter>
                  <Toaster position="bottom-right" reverseOrder={false} />
                  <AppRoutes />
                </HashRouter>
              </SearchProvider>
            </EmailProvider>
          </AuthProvider>
        </LanguageProvider>
      </MenuProvider>
    </QueryClientProvider>
  );
}
