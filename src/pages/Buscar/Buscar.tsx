import "./Buscar.css";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { BASE_URL, getFetchURLs, API_KEY, getFetchSeriesURLs } from "../../utils/endPoints";
import { fetchData } from "../../utils/fetchData";
import { getFavoritesByProfile } from "../../firebase";

import { useSearch } from "../../context/SearchContext";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import { useMenu } from "../../context/MenuContext";

import CardItem from "../../components/CardItem/CardItem";
import Lupa from "../../components/Lupa/Lupa";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Serie } from "../../interface/Serie";
import BarMenu from "../../components/BarMenu/BarMenu";
import Loader from "../../components/Loader/Loader";

export default function Buscar() {
  const navigate = useNavigate();

  const { searchTerm } = useSearch();
  const { language } = useLanguage();
  const { currentPerfil, currentUser } = useAuth();
  const { setOpenMenu } = useMenu();
  const width = useWindowWidth()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (searchTerm === "" && width >= 900) {
      navigate(-1);
    }
  }, [searchTerm, width, navigate]);

  useEffect(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  //esto se pone para actualizar mi lista
  useQuery<Movie[] | Serie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    { enabled: !!currentUser?.id && !!currentPerfil?.id }
  );

  const fetchSearchMovies = useMemo(() =>
    searchTerm
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${searchTerm}`
      : getFetchURLs(language).topRatedMovies,
    [searchTerm, language]
  );

  const fetchSearchSeries = useMemo(() =>
    searchTerm
      ? `${BASE_URL}/search/tv?api_key=${API_KEY}&language=${language}&query=${searchTerm}`
      : getFetchSeriesURLs(language).topRatedSeries,
    [searchTerm, language]
  );

  const { data: moviesData, isLoading: loadingMovies } = useQuery(
    [searchTerm, "search-movies"],
    () => fetchData(fetchSearchMovies)
  );

  const { data: seriesData, isLoading: loadingSeries } = useQuery(
    [searchTerm, "search-series"],
    () => fetchData(fetchSearchSeries)
  );


  const isLoading = loadingMovies || loadingSeries;

  const validResults = useMemo(() => {
    const movies = moviesData?.results?.filter(
      (movie: Movie) => movie.backdrop_path && movie.poster_path
    ) || [];

    const series = seriesData?.results?.filter(
      (serie: Serie) => serie.backdrop_path && serie.poster_path
    ) || [];

    return [...movies, ...series].sort(() => Math.random() - 0.5);
  }, [moviesData?.results, seriesData?.results]);

  const renderMovies = (items: Movie[]) =>
    items.map((item, index) => (
      <CardItem key={index} item={item} />
    ));

  const renderContent = () => {
    if (validResults.length > 0) {
      return <div className="contenedorItemsBuscar">{renderMovies(validResults)}</div>;
    } else {
      return (
        <div className="contenedorItemsNoE">
          <p>La búsqueda de {searchTerm} no arrojó coincidencias.</p>
        </div>
      );
    }
  };

  return (
    <div className="contenedor">
      <BarMenu />
      <div className="contenedorBuscar">
        {
          isLoading ? (
            <>
              {width < 900 && <Lupa placeholder="Search movies, series, tv series..." />}
              <Loader />
            </>
          ) : (
            <>
              {width < 900 && <Lupa placeholder="Search movies, series, tv series..." />}
              {renderContent()}
            </>
          )
        }
      </div>
    </div>
  );
}
