import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { Movies } from './Movies'
import CreateMovie from './CreateMovie'
import { getAllMovies, deleteMovie, fetchSettings } from '../services/MovieService'

function Home() {

  const [movies, setMovies] = useState([])
  const [numberOfMovies, setNumberOfMovies] = useState([])
  const [isMovieEdited, setMovieEdited] = useState(false)

  useEffect(() => {
    getAllMovies().then(movies => {
        console.log(movies)
        setMovies(movies)
      });
  }, [numberOfMovies, isMovieEdited])


  function delMovie(movieId) {
      deleteMovie(movieId).then(response => {
        console.log(response)
        setNumberOfMovies(numberOfMovies - 1)
      });
  }

  function movieCreated() {
    setNumberOfMovies(numberOfMovies + 1)
  }

  function movieEdited(res) {
     setMovieEdited(res)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateMovie movieCreated={movieCreated}></CreateMovie>
          </div>
        </div>
      </div>
      <div className="container mrgnbtm">
        <Movies movies={movies} deleteMovie={delMovie} movieEdited={movieEdited}></Movies>
     </div>
  </div>
  );
}

export default Home;
