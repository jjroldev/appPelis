import { useNavigate, useParams } from "react-router";
import "./Watch.css";

export default function Watch() {
    const { videoId } = useParams();
    const navigate = useNavigate()
    return (
        <div className="watch-container h-screen bg-black">
            <iframe
                className="watch-iframe h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&playsinline=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
            />
            <i className="fa-solid fa-arrow-left flecha" onClick={() => navigate(-1)}></i>
        </div>
    );
}
