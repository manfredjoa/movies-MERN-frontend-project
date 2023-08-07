import { useEffect, useRef, useState } from "react"
import { updateMovie, deleteMovie } from "../services/movies.js"

export default function Modal({ movie, setMovie, closeModal, closeModalKeyDown }) {
  const [update, setUpdate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleDelete = async () => {
    await deleteMovie(movie._id)
    closeModal()
  }

  const handleUpdate = () => {
    setUpdate(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMovie(movie._id, movie);
    setUpdate(false);
  }

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

        <img className="modal-image" src={movie.Poster}></img>

        {update
          ?
          <div className="modal-input-container">
            <form className="modal-input" onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  className="update-form-input"
                  type="text"
                  name="Title"
                  value={movie.Title}  
                  onChange={handleChange}
                />
              </label>  
              <label>
                Year:
                <input
                  className="update-form-input"
                  type="number"
                  name="Year"
                  value={movie.Year}
                  onChange={handleChange}
                />
              </label>  
              <label>
                Rated:
                <input
                  className="update-form-input"
                  type="text"
                  name="Rated"
                  value={movie.Rated}
                  onChange={handleChange}
                />
              </label>
              <label>
                Released: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Released"
                  value={movie.Released.slice(0,10)}
                  onChange={handleChange}
                />
              </label>
              <label>
                Runtime: 
                <input
                  className="update-form-input"
                  type="number"
                  name="Runtime"
                  value={movie.Runtime}
                  onChange={handleChange}
                />
              </label>
              <label>
                Genre: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Genre"
                  value={movie.Genre}
                  onChange={handleChange}
                />
              </label>
              <label>
                Director: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Director"
                  value={movie.Director}
                  onChange={handleChange}
                />
              </label>
              <label>
                Writer: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Writer"
                  value={movie.Writer}
                  onChange={handleChange}
                />
              </label>
              <label>
                Actors: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Actors"
                  value={movie.Actors}
                  onChange={handleChange}
                />
              </label>
              <label>
                Plot: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Plot"
                  value={movie.Plot}
                  onChange={handleChange}
                />
              </label>
              <label>
                Language: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Language"
                  value={movie.Language}
                  onChange={handleChange}
                />
              </label>
              <label>
                Country: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Country"
                  value={movie.Country}
                  onChange={handleChange}
                />
              </label>
              <label>
                Awards: 
                <input
                  className="update-form-input"
                  type="text"
                  name="Awards"
                  value={movie.Awards}
                  onChange={handleChange}
                />
              </label>
              <label>
                Box Office: 
                <input
                  className="update-form-input"
                  type="number"
                  name="BoxOffice"
                  value={movie.BoxOffice}
                  onChange={handleChange}
                />
              </label>
              <label>
                IMDb ID: 
                <input
                  className="update-form-input"
                  type="text"
                  name="imdbID"
                  value={movie.imdbID}
                  onChange={handleChange}
                />
              </label>
              <label>
                IMDb Rating: 
                <input
                  className="update-form-input"
                  type="number"
                  name="imdbRating"
                  value={movie.imdbRating}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
          :  
          <div>
            <p className="modal-text">Title: {movie.Title}</p>
            <p className="modal-text">Year: {movie.Year}</p>
            <p className="modal-text">Rating: {movie.Rated}</p>
            <p className="modal-text">Released: {movie.Released.slice(0,10)}</p>
            <p className="modal-text">Runtime: {movie.Runtime}</p>
            <p className="modal-text">Genre: {movie.Genre}</p>
            <button onClick={handleUpdate}>EDIT</button> 
            <button onClick={handleDelete}>DELETE</button>
          </div>
        }

        <button id="x" onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
