import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { getURLMovieDetails } from "../../utils/endPoints";
import { useEffect, useState } from "react";
import { Trailer } from "../../interface/Trailer";
import './ModalVideo.css';

interface VideoModalProps {
    open: boolean;
    onClose: () => void;
    movie: Movie | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, movie }) => {
    const styleBase: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const { data, isLoading } = useQuery(
        `video-${movie?.id}`, 
        () => fetchData(getURLMovieDetails(movie?.id).videos), 
        { enabled: !!movie }
    );

    const [trailer, setTrailer] = useState<Trailer | null>(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);

    useEffect(() => {
        if (data?.videos?.results?.length) {
            const foundTrailer = 
                data.videos.results.find((vid: any) => vid.name === "Official Trailer") || 
                data.videos.results[0];

            setTrailer(foundTrailer || null);
        } else {
            setTrailer(null);
        }
        setIsTrailerLoading(false);
    }, [data]);

    if(isLoading || isTrailerLoading){
        return(
            <div style={styleBase}>
                </div>
        )
    }

    return (
        <Modal open={open} onClose={onClose}>
            {trailer ? (
                <div
                    className="modal-video-container"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",
                        maxWidth: "75%",
                        aspectRatio: "16/9",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                        boxSizing: "border-box"
                    }}
                >
                    <YouTube
                        videoId={trailer.key}
                        opts={{
                            width: "100%",
                            height: "100%",
                            playerVars: {
                                autoplay: 1,
                                controls: 1,
                                modestbranding: 1,
                                rel: 0,
                            },
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            ) : (
                <div style={styleBase}>
                    <p style={{ color: "white", textAlign: "center" }}>
                        No trailer available
                    </p>
                </div>
            )}
        </Modal>
    );
};

export default VideoModal;
