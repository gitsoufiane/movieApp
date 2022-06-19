import React from 'react';
import notFound from '../../../../../../assets/images/notFound.png';
function Movie({ movie }) {
  const {
    backdrop_path,
    title,
    overview,
    adult,
    original_title,
    poster_path,
    original_language,
    release_date,
    vote_count,
    vote_average,
    genre_ids,
  } = movie;
  const imgSrc = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : notFound;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={imgSrc} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title} - {original_title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        <p className="mb-# font-normal text-gray-300">Release Data : {release_date}</p>
        <span>
          Vote : {vote_average} / {vote_count}
        </span>
      </div>
    </div>
  );
}

export default Movie;
