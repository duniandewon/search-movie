import React from 'react';
import Search from './Search';
import Movies from './Movies';

import { MovieProvider } from './MovieContext';

import './styles.css';

const App = () => (
  <MovieProvider>
    <div className='container'>
      <h1 style={{ marginBottom: '20px' }}>Search Movie App</h1>
      <Search />
      <Movies />
    </div>
  </MovieProvider>
);

export default App;
