import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from './Spinner/Spinner';
const PageLogin = lazy(() => import("./PageLogin/PageLogin"))
const PageRegister = lazy(() => import("./PageRegister/PageRegister"))
export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<Suspense fallback={<Spinner />}><PageLogin /></Suspense>} />
            <Route path="register" element={<Suspense fallback={<Spinner />}><PageRegister /></Suspense>} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};