import { lazy, Suspense } from "react";
import "./InfoWindow.css";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../../components/Spinner/Spinner";
const InfoMovie = lazy(() => import('../../components/InfoMovie/InfoMovie'))
const InfoSerie = lazy(() => import('../../components/InfoSerie/InfoSerie'))

export default function InfoWindow({ type }: { type: string }) {
    return (
        <Suspense fallback={<Spinner />}>
            {
                type == "movie" ? (

                    <InfoMovie />
                ) : (
                    <InfoSerie />
                )
            }
        </Suspense>

    )
}
