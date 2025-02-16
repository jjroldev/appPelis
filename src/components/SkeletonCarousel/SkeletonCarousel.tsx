import Carousel from "react-multi-carousel"
import { SkeletonCardItem } from "./SkeletonCardItem";
import { responsive } from "../../utils/ResponsiveCarrousel";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
export function SkeletonCarousel({ isLarge,numItems ,title}: { isLarge: boolean,numItems:number,title:string }) {
    const [isLarge1,setIsLarge]=useState(isLarge)
    const width=useWindowWidth()
    const renderSkeletonCardItem = (numItems: number) => {
        return Array.from({ length: numItems }).map((_, index) => (
            <SkeletonCardItem key={index} isLarge={isLarge1} />
        ));
    };


    useEffect(()=>{
        if(width<1000){
            setIsLarge(false)
            console.log(isLarge1)
        }
    },[width,isLarge])


    return (
        <>
            <div className="carousel">
                <h2 className="tituloCarousel">{title}</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive(isLarge1)}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    className="carousel-react"
                    partialVisible={true}
                >
                    {renderSkeletonCardItem(numItems)}
                </Carousel>
            </div>
        </>
    )
}