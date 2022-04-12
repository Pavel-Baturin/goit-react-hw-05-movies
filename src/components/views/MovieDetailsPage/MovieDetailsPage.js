import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { ApiService } from '../../ApiService/ApiService';
import s from './MovieDetailsPage.module.css';
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const apiService = new ApiService();
const BASIC_URL = 'https://image.tmdb.org/t/p/w342';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    apiService
      .getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log('Error: ', error.response.status));
  }, [movieId]);

  return (
    <>
      <button type="button" onClick={() => navigate(-1)} className={s.button}>
        Go back
      </button>
      {movie.length !== 0 && (
        <>
          <div className={s.card}>
            <img
              src={`${BASIC_URL}${movie.poster_path}`}
              alt={movie.original_title}
              className={s.image}
            />

            <div className={s.description}>
              <h2 className={s.title}>{movie.title}</h2>
              <p className={s.score}>User score: {movie.vote_average}</p>
              <p className={s.overview}>
                <span className={s.textAсcent}>Overview</span> {movie.overview}
              </p>
              <p>
                <span className={s.textAсcent}>Genres</span>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <div>
            <p className={s.textAсcent}>Additional information</p>
            <ul className={s.listLink}>
              <li className={s.item}>
                <Link to="cast" className={s.link}>
                  cast
                </Link>
              </li>
              <li className={s.item}>
                <Link to="reviews" className={s.link}>
                  reviews
                </Link>
              </li>
            </ul>
            <Suspense>
              <Routes>
                <Route path="cast" element={<Cast id={movieId} />} />
                <Route path="reviews" element={<Reviews id={movieId} />} />
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
