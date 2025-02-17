import { Movie } from "../interface/Movie";
import { Serie } from "../interface/Serie";
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
