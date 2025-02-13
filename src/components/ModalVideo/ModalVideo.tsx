import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
import {Movie } from "../../interface/Movie";
import { useEffect, useState } from "react";
import { Trailer } from "../../interface/Trailer";
import './ModalVideo.css';
import { Serie } from "../../interface/Serie";

interface VideoModalProps {
    open: boolean;
    onClose: () => void;
    item: Movie| undefined|Serie;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, item }) => {
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

    const [trailer, setTrailer] = useState<Trailer | null>(null);
    const [isTrailerLoading, setIsTrailerLoading] = useState(true);
    
    useEffect(() => {
        if (item?.videos?.results?.length) {
            const foundTrailer = 
                item.videos.results.find((vid: any) => vid.name === "Official Trailer") || 
                item.videos.results[0];

            setTrailer(foundTrailer || null);
        } else {
            setTrailer(null);
        }
        setIsTrailerLoading(false);
    }, [item]);

    if( isTrailerLoading){
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
                        width: "80%",
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
