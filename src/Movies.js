import React, { useContext } from 'react';
import MovieCard from './MovieCard';

import { MovieContext } from './MovieContext';

const Movies = () => {
  const { Movies } = useContext(MovieContext);

  console.log(Movies);

  return (
    <div>
      {Movies.length > 0 ? (
        Movies.map(movie => <MovieCard key={movie} id={movie} />)
      ) : (
        <p>
          Couldn't find any movies. Please enter another movie name to search
          again
        </p>
      )}
    </div>
  );
};

export default Movies;
