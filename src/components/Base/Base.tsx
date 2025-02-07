import './Base.css'
import { NavBar } from '../NavBar/NavBar'
import { lazy, Suspense } from 'react'
const Login = lazy(() => import('../Login/Login'))
const Register = lazy(() => import('../Register/Register'))
export function Base({ isLogin }: { isLogin?: boolean }) {
    return (
        <>
            <NavBar logoBuscar={false} logoGrande={true} mostrarDesplegable={false}/>

            <div className="loginContainer">
                {
                    isLogin ? (
                        <Suspense fallback={<></>}>
                            <Login />
                        </Suspense>
                    ) : (
                        <Suspense fallback={<></>}>

                            <Register />
                        </Suspense>
                    )
                }
            </div>
        </>
    )
}