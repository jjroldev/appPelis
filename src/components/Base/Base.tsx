import './Base.css'
import { NavBar } from '../NavBar/NavBar'
import { lazy } from 'react'
const Login = lazy(()=>import('../Login/Login'))
const Register = lazy(()=>import('../Register/Register'))
export function Base({isLogin}:{isLogin?:boolean}) {
    return (
        <>
            <NavBar logoBuscar={false} logoGrande={true} />

            <div className="loginContainer">
                {
                    isLogin ?(
                        <Login />
                    ):(
                        <Register />
                    )
                }
            </div>
        </>
    )
}