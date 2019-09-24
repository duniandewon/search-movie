import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const Search = () => {
  const [Search, setSearch] = useState('');

  const { searchMovies } = useContext(MovieContext);

  const onChange = e => setSearch(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    searchMovies(Search);

    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Search for a movie'
        value={Search}
        onChange={onChange}
      />
      <button>
        <i className='fa fa-search' />
      </button>
    </form>
  );
};

export default Search;
