import './Base.css'
import { NavBar } from '../NavBar/NavBar'
import { lazy, Suspense } from 'react'
import Spinner from '../Spinner/Spinner'
const Login = lazy(() => import('../Login/Login'))
const Register = lazy(() => import('../Register/Register'))
export default function Base({ isLogin }: { isLogin?: boolean }) {
    return (
        <>
            <NavBar logoBuscar={false} logoGrande={true} mostrarDesplegable={false}/>

            <div className="loginContainer">
                {
                    isLogin ? (
                        <Suspense fallback={<Spinner />}>
                            <Login />
                        </Suspense>
                    ) : (
                        <Suspense fallback={<Spinner />}>

                            <Register />
                        </Suspense>
                    )
                }
            </div>
        </>
    )
}