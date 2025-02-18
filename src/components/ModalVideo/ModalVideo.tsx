import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
interface VideoModalProps {
    open: boolean;
    onClose: () => void;
    videoKey: string | undefined;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, videoKey }) => {
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

    return (
        <Modal open={open} onClose={onClose}>
            {
                videoKey ? (
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
                            videoId={videoKey}
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
                )
            }
        </Modal>
    );
};

export default VideoModal;
