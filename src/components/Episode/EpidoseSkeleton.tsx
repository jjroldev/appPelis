import { Skeleton } from '@mui/material';
import './Episode.css';

export default function EpisodeSkeleton() {
    return (
        <div className='container-episode' style={{height:"250px"}}>
            <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width={"100%"}
                    height={"100%"}
                />
        </div>
    );
}
