import React from 'react';
import { Movie } from './components/Movie';
function MovieList({ data = [] }) {
  return (
    <div className="flex flex-wrap items-center justify-between">
      {data.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
