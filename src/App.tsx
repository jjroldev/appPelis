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

  useEffect(() => {
    fecthMovies("Superman")
  }, []);
  return (
    <>
      <div className="header" >
        {movies.length > 0 && (
          <img src={URL_IMAGE + movies[0].backdrop_path} alt={movies[0].title} />
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
