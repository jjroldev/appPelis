import { lazy, Suspense } from 'react'
import './PageLogin.css'
import Spinner from '../Spinner/Spinner'
const Base = lazy(()=>import('../Base/Base'))
export default function PageLogin(){
    return(
        <Suspense fallback={<Spinner />}><Base isLogin={true}/></Suspense>
    )
}