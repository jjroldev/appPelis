import { Movie } from "../interface/Movie";
import { Serie } from "../interface/Serie";
import { Videos } from "../interface/VideosEpisode";
import CardItem from "../components/CardItem/CardItem";
export const getCertifiedReleaseItem= (item: Serie |Movie |undefined, country: string = "US") => {
    if (item && "content_ratings" in item) {
        const contentRCountry = item.content_ratings.results.filter((data) => (
            data.iso_3166_1 === country || 
            data.iso_3166_1 === "ES" || 
            data.iso_3166_1 === "AR" || 
            data.iso_3166_1 === "MX"
        ));
        
        const rating = contentRCountry.filter((data) => (
            data?.rating != ""
        ))[0]?.rating
        return rating
    } else if (item && "release_dates" in item) {
        const resultsEs = item?.release_dates?.results.filter((data) => (
            data.iso_3166_1 === country
        ))
        const certification = resultsEs[0]?.release_dates?.filter((data) => (
            data.certification != ""
        ))[0]?.certification
        return certification
    }
    return null
};

export function getLogoPath(item: Movie | Serie | undefined, dataImages: any, language: string) {
    if (!item && !dataImages) return null;

    const logoPathItem = item?.images?.logos?.find((l) => l.iso_639_1 === language) 
                      || item?.images?.logos?.find((l) => l.iso_639_1 === "en");

    if (logoPathItem) return logoPathItem.file_path;

    const logoPathData = dataImages?.logos?.find((l: any) => l.iso_639_1 === language) 
                      || dataImages?.logos?.find((l: any) => l.iso_639_1 === "en");

    if (logoPathData) return logoPathData.file_path;

    if (dataImages?.logos?.length) return dataImages.logos[0]?.file_path;

    return null;
}


export function isMovie(item:Movie|Serie|undefined){
    return item && "title" in item
}

export function getIdVideoEpisode(videos:Videos | undefined){
    return videos?.results?.filter((data)=>(
        data?.key!=null
    ))[0]?.key
}


export function getVideoItem(item: Movie | Serie | undefined){
    const foundTrailer = 
                item?.videos?.results?.find((vid: any) => vid.name === "Official Trailer") || 
                item?.videos?.results[0];
    return foundTrailer?.key   
}


export const formatRuntime = (minutes: number) => {
    if (!minutes) return null

    if (minutes < 60) {
        return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours} h ${mins} min` : `${hours} h`;
};

export const renderItems = (items: Movie[] | Serie[], isLarge: boolean | undefined, width: number)  => {
    return items.map((item:Movie|Serie) => (
        <CardItem key={item.id} item={item} isLarge={width > 1000 ? isLarge : false} />
    ));
};
