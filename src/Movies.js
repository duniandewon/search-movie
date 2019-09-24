import React, { useContext } from 'react';
import MovieCard from './MovieCard';

import { MovieContext } from './MovieContext';

const Movies = () => {
  const { Movies } = useContext(MovieContext);

  return (
    <div>
      {Movies.map(movie => (
        <MovieCard key={movie} id={movie} />
      ))}
    </div>
  );
};

export default Movies;
