import { useState, useEffect } from "react";
import { getMovies } from "../services/movies.js";
// import { Link } from "react-router-dom";
import Movie from "../components/Movie.jsx";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
  }, [])
  
  async function fetchMovies() {
    const allMovies = await getMovies();
    setMovies(allMovies);
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="all-movies">
        {movies.map((movie) => (<Movie key={movie._id} movie={movie} />))}
      </div>
    </div>
  )
}
