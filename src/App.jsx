import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./components/views/HomePage/HomePage'));
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('./components/views/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('./components/views/NotFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1 className="fallback">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
