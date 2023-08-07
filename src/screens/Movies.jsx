import { useState, useEffect } from "react";
import { getMovies } from "../services/movies.js";
import Movie from "../components/Movie.jsx";
import Modal from "../components/Modal.jsx"

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false)
  const [oneMovie, setOneMovie] = useState({})

  useEffect(() => {
    fetchMovies()
  }, [modal, movies])
  
  async function fetchMovies() {
    const allMovies = await getMovies();
    setMovies(allMovies);
  }

  const showModal = (movie) => {
    setOneMovie(movie)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const closeModalKeyDown = (e) => {
    if (e.key === "Escape") {
      setModal(false)
    }
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="all-movies">
        {movies.map((movie) => (<Movie key={movie._id} movie={movie} showModal={showModal} />))}
      </div>
      {modal ? <Modal movie={oneMovie} setMovie={setOneMovie} closeModal={closeModal} closeModalKeyDown={closeModalKeyDown} /> : null }
    </div>
  )
}
