import React, { useState, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [Movies, setMovies] = useState(['tt0944947']);
  const [Movie, setMovie] = useState({});

  const searchMovies = async movieName => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=eecb0e0a&s=${movieName}`
    );

    if (!res.data.Search) {
      setMovies([]);
      return;
    }

    const movieList = res.data.Search.map(movie => movie.imdbID);

    setMovies(movieList);
  };

  const getMovie = async id => {
    const res = axios.get(
      `http://www.omdbapi.com/?apikey=eecb0e0a&i=${id}&plot=full`
    );

    setMovie(res);
  };

  return (
    <MovieContext.Provider
      value={{
        Movies,
        Movie,
        setMovies,
        setMovie,
        searchMovies,
        getMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
