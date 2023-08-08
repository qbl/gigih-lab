import React from 'react'
import EditMovieModal from './EditMovieModal'

export const Movies = ({movies, deleteMovie, movieEdited}) => {

    console.log('movies length:::', movies)
    if (movies.length === 0) return null

    const MovieRow = (movie,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{movie._id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                        {movie.status}
                        </div>
                        <div className="col-md-3">
                            <EditMovieModal movie={movie} movieEdited={movieEdited}/>
                        </div>
                        <div className="col-md-3">
                          <button type="button" onClick={(e) => deleteMovie(movie._id)} className="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const movieTable = movies.map((movie,index) => MovieRow(movie,index))

    return(
        <div className="container">
            <h2>Movies</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Movie Id</th>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                    {movieTable}
                </tbody>
            </table>
        </div>
    )
}
