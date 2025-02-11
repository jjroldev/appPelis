import "./Buscar.css";
import { useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import { BASE_URL, getFetchURLs, API_KEY } from "../../utils/endPoints";
import { fetchData } from "../../utils/fetchData";
import { addFavoriteToProfile, getFavoritesByProfile } from "../../firebase";

import { useSearch } from "../../context/SearchContext";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import { useMenu } from "../../context/MenuContext";

import { NavBar } from "../NavBar/NavBar";
import CardMovie from "../CardMovie/CardMovie";
import Lupa from "../Lupa/Lupa";
import { Movie } from "../../interface/Movie";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Buscar() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { searchTerm, setSearchTerm } = useSearch();
  const { language } = useLanguage();
  const { currentPerfil, currentUser } = useAuth();
  const { setOpenMenu } = useMenu();
  const width = useWindowWidth()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (searchTerm === "" && width >= 900) {
      navigate("/home", { state: { fromBuscar: true } });
    }
  }, [searchTerm, width, navigate]);

  useEffect(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  const handleSearch = useCallback(
    (value: string) => {
      if (value !== searchTerm) {
        setSearchTerm(value);
      }
    },
    [searchTerm, setSearchTerm]
  );

  useQuery<Movie[]>(
    `favorites-${currentUser?.id}-${currentPerfil?.id}`,
    () => getFavoritesByProfile(currentUser?.id, currentPerfil?.id),
    { enabled: !!currentUser?.id && !!currentPerfil?.id }
  );

  const handleAddFavorite = useCallback(
    async (movie: Movie | null) => {
      await addFavoriteToProfile(currentUser?.id, currentPerfil?.id, movie);
      await queryClient.invalidateQueries(
        `favorites-${currentUser?.id}-${currentPerfil?.id}`
      );
    },
    [currentUser?.id, currentPerfil?.id, queryClient]
  );

  const fetchSearch = useMemo(
    () =>
      searchTerm
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${searchTerm}`
        : getFetchURLs(language).popularMovies,
    [searchTerm, language]
  );

  const { data: movies, isLoading } = useQuery(
    [searchTerm || "popularMovies"],
    () => fetchData(fetchSearch)
  );

  const validMovies = useMemo(
    () =>
      movies?.results?.filter(
        (movie: Movie) => movie.backdrop_path && movie.poster_path
      ),
    [movies?.results]
  );

  if (isLoading) {
    return (
      <div className="contenedor">
        <NavBar logoBuscar={true} menu={true} perfil={true} condicionExpanded={true} />
      </div>
    );
  }

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie, index) => (
      <CardMovie key={index} movie={movie} onAddFavorite={() => handleAddFavorite(movie)} />
    ));

  const renderContent = () => {
    if (validMovies.length > 0) {
      return <div className="contenedorPeliculasBuscar">{renderMovies(validMovies)}</div>;
    } else {
      return (
        <div className="contenedorPeliculasNoE">
          <p>La búsqueda de {searchTerm} no arrojó coincidencias.</p>
        </div>
      );
    }
  };

  return (
    <div className="contenedor">
      <NavBar perfil={true} menu={true} logoBuscar={true} condicionExpanded={true} />
      <div className="contenedorBuscar">
        {width < 900 && <Lupa placeholder="Search Movies" onSubmit={handleSearch} />}
        {renderContent()}
      </div>
    </div>
  );
}
