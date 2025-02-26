import { lazy } from 'react'
import { Suspense } from 'react'
import Spinner from '../../components/Spinner/Spinner'
const Base = lazy(() => import('../../components/Base/Base'))
export default function PageRegister() {
    return (
        <Suspense fallback={<Spinner />}>
            <Base />
        </Suspense>
    )
}