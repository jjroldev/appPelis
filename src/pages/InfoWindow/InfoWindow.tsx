import "./InfoWindow.css";
import "react-multi-carousel/lib/styles.css";
import InfoMovie from "../../components/InfoMovie/InfoMovie";
import InfoSerie from "../../components/InfoSerie/InfoSerie";
export default function InfoWindow({ type }: { type: string }) {
    return(
        type=="movie"?(
            <InfoMovie />
        ):(
            <InfoSerie />
        )
    )
}
