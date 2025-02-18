import { Movie } from "../interface/Movie";
import { Serie } from "../interface/Serie";
import { Videos } from "../interface/VideosEpisode";
export const getCertifiedReleaseItem= (item: Serie |Movie |undefined, country: string = "US") => {
    if (item && "content_ratings" in item) {
        const contentRCountry = item.content_ratings.results.filter((data) => (
            data.iso_3166_1 === country || "US" || "ES" || "AR" || "MX"
        ))
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
