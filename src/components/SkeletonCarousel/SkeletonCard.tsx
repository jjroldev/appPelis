import { Skeleton } from "@mui/material"
export function SkeletonCard({ isLarge }: { isLarge: boolean }) {
    return (
        <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
            <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
                <Skeleton width={"100%"} height={"100%"} variant="rectangular" sx={{ bgcolor: 'grey.900' }}/>
            </div>
        </div>
    )
}