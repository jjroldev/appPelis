import './Base.css'
import { NavBar } from '../NavBar/NavBar'
import { lazy, Suspense } from 'react'
import Spinner from '../Spinner/Spinner'
const Login = lazy(() => import('../Login/Login'))
const Register = lazy(() => import('../Register/Register'))
import { useState, useEffect } from 'react'
export default function Base({ isLogin }: { isLogin?: boolean }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = "/appPelis/hero.png";

        img.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (

        imageLoaded ? (
            <>
                <NavBar logoBuscar={false} logoGrande={true} mostrarDesplegable={false} />

                <div className="loginContainer">
                    <img src="/appPelis/hero.png" alt="" className='heroImg' />
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
        ) : (
            <>
                <NavBar logoBuscar={false} logoGrande={true} mostrarDesplegable={false} />
                <Spinner />
            </>
        )

    )
}