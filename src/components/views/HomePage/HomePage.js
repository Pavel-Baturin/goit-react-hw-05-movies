import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiService } from '../../ApiService/ApiService';
import s from './HomePage.module.css';

const apiService = new ApiService();
const BASIC_URL = 'https://image.tmdb.org/t/p/w342';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  localStorage.removeItem('movies');

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const decrementPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  useEffect(() => {
    apiService
      .fetchTrendingFilms(page)
      .then(setMovies)
      .then(
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      )
      .catch(error => console.log('Error: ', error.response.status));
  }, [page]);
  return (
    <>
      <ul className={s.gallery}>
        {movies.length !== 0 &&
          movies.map(movie => (
            <li key={movie.id} className={s.film}>
              <div className={s.thumb}>
                <img
                  src={`${BASIC_URL}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
      {movies.length !== 0 && (
        <div className={s.navigation}>
          <button
            type="button"
            disabled={page < 2}
            onClick={decrementPage}
            className={s.button}
          >
            prev
          </button>
          <p className={s.page}>{page}</p>
          <button
            type="button"
            disabled={movies.length < 19}
            onClick={incrementPage}
            className={s.button}
          >
            next
          </button>
        </div>
      )}
    </>
  );
}
