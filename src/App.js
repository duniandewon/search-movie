import React from 'react';
import Search from './Search';
import Movies from './Movies';

import { MovieProvider } from './MovieContext';

import './styles.css';

const App = () => (
  <MovieProvider>
    <Search />
    <Movies />
  </MovieProvider>
);

export default App;
