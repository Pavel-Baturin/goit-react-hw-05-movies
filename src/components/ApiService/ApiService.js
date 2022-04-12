import axios from 'axios';

const BASIC_URL = 'https://api.themoviedb.org';
const KEY = 'd248c3817d332dfccb440b9afc9f42a3';

export const ApiService = class {
  constructor() {
    this.page = 1;
  }

  async fetchTrendingFilms(page) {
    const response = await axios.get(
      `${BASIC_URL}/3/trending/movie/day?api_key=${KEY}&page=${page}`
    );
    return response.data.results;
  }

  async fetchMovies(searchedMovies, page) {
    const response = await axios.get(
      `${BASIC_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${searchedMovies}&page=${page}`
    );
    return response.data.results;
  }

  async getMovieDetails(movieId) {
    const response = await axios.get(
      `${BASIC_URL}/3/movie/${movieId}?api_key=${KEY}`
    );
    return response.data;
  }

  async getMovieDetailsCast(movieId) {
    const response = await axios.get(
      `${BASIC_URL}/3/movie/${movieId}/credits?api_key=${KEY}`
    );
    return response.data.cast;
  }

  async getMovieDetailsReviews(movieId) {
    const response = await axios.get(
      `${BASIC_URL}/3/movie/${movieId}/reviews?api_key=${KEY}`
    );
    return response.data.results;
  }
};
