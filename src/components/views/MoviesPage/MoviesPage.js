import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiService } from '../../ApiService/ApiService';
import s from './MoviesPage.module.css';
import poster from '../images/film-null@1x.jpg';

const apiService = new ApiService();
const BASIC_URL = 'https://image.tmdb.org/t/p/w342';

export default function MoviesPage() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) ?? []
  );

  const handleInputChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Введите запрос в поле поиска!');
      return;
    }
    setSearch(input);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const decrementPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    apiService
      .fetchMovies(search, page)
      .then(setMovies)
      .then(
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      )
      .catch(error => console.log('Error: ', error.response.status));
  }, [search, page]);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images movies"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <ul className={s.gallery}>
        {movies.length !== 0 &&
          movies.map(movie => (
            <li key={movie.id} className={s.film}>
              <div className={s.thumb}>
                <img
                  src={
                    movie.poster_path
                      ? `${BASIC_URL}${movie.poster_path}`
                      : `${poster}`
                  }
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
