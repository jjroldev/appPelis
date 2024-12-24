import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { CardMovie } from './components/CardMovie/CardMovie'
import { Movie } from './interface/Movie'
export const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '6e6a632ff00b90c42dadea3c48a464ab'
  const [logoPath,setLogoPath]=useState('');
  const fecthMovies = async (searchKey: string) => {
    try {
      const type = searchKey ? 'search' : 'discover'
      const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        }
      })
      setMovies(results)
      console.log(results)
    } catch {
      console.error("error")
    }


  }

  const fetchMovieImages = async (movieId: number) => {
    try {
      const { data } = await axios.get(`${API_URL}/movie/${movieId}/images`, {
        params: {
          api_key: API_KEY,
        },
      });
      const logo = data.logos.find((logo: any) => logo.iso_639_1 === "en") || data.logos[0];
      setLogoPath(logo.file_path)
    } catch (error) {
      console.error("Error al obtener las imágenes de la película:", error);
    }
  };
  

  useEffect(() => {
    fecthMovies("")    
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      fetchMovieImages(movies[0].id)
    }
  }, [movies])


  return (
    <>
      <div className="header" >
        <div className="navbar">
          <img src="../src/images/Netflix_Logo_RGB.png" alt="logo-de-netflix-practica" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        {movies.length > 0 && (
          <>
          <img className='fondo' src={URL_IMAGE + movies[0].backdrop_path} alt={movies[0].title} />
          <div className='contenedorLogo'>
            <img src={URL_IMAGE+logoPath} alt="" />
            <p>{movies[0].overview}</p>
          </div>
          </>
        )}
      </div>
      <div className="contenedorPeliculas">
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default App
