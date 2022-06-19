import axios from 'axios';

export const baseURL = `https://api.themoviedb.org/3/`;

export const URL = {
  genre: {
    movielist: 'genre/movie/list',
    tvshowList: 'genre/tv/list',
  },
  search: {
    movie: 'search/movie',
  },
};

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGE2OGMxNzczODhlNjA4YzJlMzEwZmJhZmFjOTAyYyIsInN1YiI6IjYyOWU3Njc2YTI4NGViMDA5ZGZiMGE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPIeB0QxU54GSql5LoUouWUHY8dr2wE6HpktHiFvB3I',
  },
});
