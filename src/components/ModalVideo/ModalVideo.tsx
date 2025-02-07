import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
import { Movie } from "../../interface/Movie";
import { useQuery } from "react-query";
import { fetchData } from "../../utils/fetchData";
import { getURLMovieDetails } from "../../utils/endPoints";
import { useEffect, useState } from "react";
import { Trailer } from "../../interface/Trailer";
import './ModalVideo.css'
interface VideoModalProps {
    open: boolean;
    onClose: () => void;
    movie: Movie | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, movie }) => {
    const {data}=useQuery(`video-${movie?.id}`,()=>fetchData(getURLMovieDetails(movie?.id).videos))
    const [trailer,setTrailer]=useState<Trailer>()
    useEffect(()=>{
        if (data?.videos && data?.videos?.results) {
            const foundTrailer =
              data?.videos?.results.find(
                (vid: any) => vid.name === "Official Trailer"
              ) || data?.videos?.results[8];
  
            if (foundTrailer) {
              setTrailer(foundTrailer);
            }
          }
    },[data])
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
                        maxHeight:"85%",
                        maxWidth: "85%",
                        aspectRatio: "16/9",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                        boxSizing:"border-box"
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
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <p style={{ color: "white", textAlign: "center" }}>
                        No trailer available
                    </p>
                </div>
            )}
        </Modal>
    );
};

export default VideoModal;
