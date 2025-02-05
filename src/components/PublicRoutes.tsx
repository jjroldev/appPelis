import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const PageLogin = lazy(()=>import("./PageLogin/PageLogin"))
const PageRegister = lazy(()=>import("./PageRegister/PageRegister"))
export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<PageLogin />} />
            <Route path="register" element={<PageRegister />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};