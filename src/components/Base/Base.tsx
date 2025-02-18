import './Base.css'
import { lazy, Suspense } from 'react'
import Spinner from '../Spinner/Spinner'
import NavBarBasic from '../NavBarBasic/NavBarBasic'
const Login = lazy(() => import('../Login/Login'))
const Register = lazy(() => import('../Register/Register'))
export default function Base({ isLogin }: { isLogin?: boolean }) {

    return (
        <>
            <NavBarBasic />
            <div className="loginContainer">
                <img src="/appPelis/hero.png" alt="" className='heroImg' />
                <Suspense fallback={<Spinner />}>
                    {
                        isLogin ? (
                            <Login />
                        ) : (
                            <Register />
                        )
                    }
                </Suspense>

            </div>
        </>
    )
}