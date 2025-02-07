import './PageRegister.css'
import { lazy } from 'react'
import { Suspense } from 'react'
import Spinner from '../Spinner/Spinner'
const Base = lazy(() => import('../Base/Base'))
export default function PageRegister() {
    return (
        <Suspense fallback={<Spinner />}>
            <Base />
        </Suspense>
    )
}