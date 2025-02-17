import { Skeleton } from '@mui/material';
import './EpisodeSkeleton.css'
export default function EpisodeSkeleton() {
    return (
        <div className='container-episode-skeleton'>
            <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}
