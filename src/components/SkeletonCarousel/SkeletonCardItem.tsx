export function SkeletonCardItem({ isLarge }: { isLarge: boolean | undefined }) {
    return (
        <div className={`contenedor-poster ${isLarge ? "large" : ""}`}>
            <div className={`cardContainerImage ${isLarge ? "backdrop" : "poster"}`}>
                <div
                    className={`h-full w-full absolute inset-0 opacity-100"
                        } transition-opacity duration-400`}
                ></div>
            </div>
        </div>
    )
}