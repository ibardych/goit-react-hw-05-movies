import axios from 'axios';
import { theMovieDBApiKey } from 'constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: theMovieDBApiKey,
};

export const findMoviesByQuery = async ({ query, page }) => {
  const { data } = await axios.get('search/movie', {
    params: {
      query,
      page,
    },
  });

  const { results, total_pages: totalPages, total_results: total } = data;
  const reachedEnd = totalPages === page;

  return { results, totalPages, total, reachedEnd, page };
};

export const getTrandingMovies = async ({ page, filter }) => {
  const { data } = await axios.get(`trending/movie/${filter}`, {
    params: {
      page,
    },
  });

  const { results, total_pages: totalPages, total_results: total } = data;
  const reachedEnd = totalPages === page;

  return { results, totalPages, total, reachedEnd, page };
};

export const getMovieDetailsById = async ({ movieId }) => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
};

export const getCast = async ({ movieId }) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
};

export const getReviews = async ({ movieId, page }) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
      page,
    },
  });

  const { results, total_pages: totalPages, total_results: total } = data;
  const reachedEnd = totalPages === page;

  return { results, totalPages, total, reachedEnd, page };
};
