import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header/Header';

function getPreparedMovies(movies, querry) {
  let preparedMovies = [...movies];

  if (querry) {
    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(querry.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(querry.toLowerCase().trim()),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [querry, setQuerry] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, querry);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Header filterBy={filter => setQuerry(filter)} querry={querry} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
