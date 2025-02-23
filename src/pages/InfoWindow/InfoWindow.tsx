import { lazy, Suspense, useEffect } from "react";
import "./InfoWindow.css";
import "react-multi-carousel/lib/styles.css";
import Spinner from "../../components/Spinner/Spinner";
const InfoMovie = lazy(() => import('../../components/InfoMovie/InfoMovie'))
const InfoSerie = lazy(() => import('../../components/InfoSerie/InfoSerie'))

export default function InfoWindow({ type }: { type: string }) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);
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
