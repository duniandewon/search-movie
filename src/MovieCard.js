import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieCard = props => {
  const [Movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=eecb0e0a&i=${props.id}&plot=full`)
      .then(res => res.data)
      .then(res => {
        setMovie(res);
      });
    //   eslint-disable-next-line
  }, []);

  const { Title, Released, Genre, Plot, Poster, imdbRating } = Movie;

  return (
    <div className='card'>
      <div className='car-img-container'>
        <img className='card-img' src={Poster} alt='' />
      </div>
      <div className='movie-info'>
        <h2 className='card-title'>movie details</h2>
        <div className='movie-title'>
          <h1>{Title}</h1>
          <p>Release Date: {Released}</p>
        </div>
        <h3 className='movie-rating'>Rating: {imdbRating} / 10</h3>
        <p className='movie-dec'>{Plot}</p>
        <div className='tags'>
          {Genre &&
            Genre.split(', ').map((g, i) => (
              <div className='tag' key={i}>
                {g}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
