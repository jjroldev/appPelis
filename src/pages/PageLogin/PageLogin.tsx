import { lazy, Suspense } from 'react'
import Spinner from '../../components/Spinner/Spinner'
const Base = lazy(()=>import('../../components/Base/Base'))
export default function PageLogin(){
    return(
        <Suspense fallback={<Spinner />}><Base isLogin={true}/></Suspense>
    )
}