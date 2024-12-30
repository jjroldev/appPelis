import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../App";
import { Trailer } from "../../interface/Trailer";
interface VideoModalProps {
    open: boolean;
    onClose: () => void;
    movieId: number;
    language: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, movieId, language }) => {
    const [trailer, setTrailer] = useState<Trailer>()
    const fetchTrailer = async (id: number) => {
        const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
                language
            },
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid: any) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }
    };

    useEffect(() => {
        fetchTrailer(movieId)
    }, [movieId, language])
    return (
        <Modal open={open} onClose={onClose}>
            {trailer ? (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        maxWidth: "900px",
                        aspectRatio: "16/9",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                    }}
                >
                    <YouTube
                        videoId={trailer?.key}
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
                    }}>
                    <p style={{ color: "white", textAlign: "center" }}>{language=="en"?"No trailer available":"No hay trailer disponible"}</p>
                </div>
            )}
        </Modal>
    );
};

export default VideoModal;