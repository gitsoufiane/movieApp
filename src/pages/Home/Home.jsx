import React from 'react';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { api, URL } from '../../api';
import { useQuery } from 'react-query';

const searchMovies = async ({ queryKey }) => {
  const [, query] = queryKey;
  return api.get(URL.search.movie, { params: { query } }).then((response) => response.data);
};

function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { isSuccess, isError, data, error } = useQuery(['search', searchTerm], searchMovies, {
    enabled: Boolean(searchTerm),
  });

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <SearchBar value={searchTerm} onChange={onChange} />
      {isError ? <div>{error.message}</div> : null}
      {isSuccess ? <MovieList data={data.results} /> : null}
    </div>
  );
}

export default Home;
