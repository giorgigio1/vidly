import React, { useState } from "react";
import { getMovies } from './services/fakeMovieService'

function Movies() {

    const [movies, setMovies] = useState(getMovies())

    function handleDelete(movie) {
        const newMovies = movies.filter(m => m._id !== movie._id)
        setMovies(newMovies)
    }

    
    const { length: count } = movies;
    if (count === 0) return <p>There are no more movies!</p>;

    return (
        <React.Fragment>
          <p>Showing {count} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
}

export default Movies;