import { useEffect, useRef, useState } from "react"
import { updateMovie, deleteMovie } from "../services/movies.js"

export default function Modal({ movie, setMovie, setToggle, closeModal, closeModalKeyDown }) {
  const [update, setUpdate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleDelete = async () => {
    await deleteMovie(movie._id)
    setToggle(prevToggle => !prevToggle)
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
    movie.Genre = Array.isArray(movie.Genre) ? movie.Genre : movie.Genre.split(",").map((index) => index.trim())
    movie.Director = Array.isArray(movie.Director) ? movie.Director  : movie.Director.split(",").map((index) => index.trim())
    movie.Writer = Array.isArray(movie.Writer) ? movie.Writer : movie.Writer.split(",").map((index) => index.trim())
    movie.Actors = Array.isArray(movie.Actors) ? movie.Actors : movie.Actors.split(",").map((index) => index.trim())
    movie.Language = Array.isArray(movie.Language) ? movie.Language : movie.Language.split(",").map((index) => index.trim())
    movie.Country = Array.isArray(movie.Country) ? movie.Country : movie.Country.split(",").map((index) => index.trim())
    await updateMovie(movie._id, movie);
    setToggle(prevToggle => !prevToggle)
    setUpdate(false);
  }

  const handleBack = () => {
    setUpdate(false);
  }

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

        <img className="modal-image" src={movie.Poster}></img>

        {update ? <button id="back-button" onClick={handleBack}>BACK</button> : null}

        {update
          ?
          <div className="modal-input-container">
            <form className="modal-input" onSubmit={handleSubmit}>
              <span>
                <label>
                  Title:
                </label> 
                <input
                  className="update-form-input"
                  type="text"
                  name="Title"
                  value={movie.Title}  
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Year:
                </label>
                <input
                  className="update-form-input"
                  type="number"
                  name="Year"
                  value={movie.Year}
                  onChange={handleChange}
                />
              </span>  
              <span>
                <label>
                  Rated:
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Rated"
                  value={movie.Rated}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Released: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Released"
                  value={ movie.Released ? movie.Released.slice(0,10) : "" }
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Runtime: 
                </label>
                <input
                  className="update-form-input"
                  type="number"
                  name="Runtime"
                  value={movie.Runtime}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Genre: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Genre"
                  value={movie.Genre}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Director: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Director"
                  value={movie.Director}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Writer: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Writer"
                  value={movie.Writer}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Actors: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Actors"
                  value={movie.Actors}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Plot: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Plot"
                  value={movie.Plot}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Awards: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="Awards"
                  value={movie.Awards}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  Box Office: 
                </label>
                <input
                  className="update-form-input"
                  type="number"
                  name="BoxOffice"
                  value={movie.BoxOffice}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  IMDb ID: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="imdbID"
                  value={movie.imdbID}
                  onChange={handleChange}
                />
              </span>
              <span>
                <label>
                  IMDb Rating: 
                </label>
                <input
                  className="update-form-input"
                  type="text"
                  name="imdbRating"
                  value={movie.imdbRating}
                  onChange={handleChange}
                />
              </span>
              <button type="submit" id="submit-update">SUBMIT</button>
            </form>
          </div>
          :  
          <div>
            <p className="modal-text">Title: {movie.Title}</p>
            <p className="modal-text">Year: {movie.Year}</p>
            <p className="modal-text">Rating: {movie.Rated}</p>
            <p className="modal-text">Released: { movie.Released ? movie.Released.slice(0,10) : "" }</p>
            <p className="modal-text">Runtime: {movie.Runtime}</p>
            <p className="modal-text">Genre(s): {movie.Genre.join(", ")}</p>
            <p className="modal-text">Director(s): {movie.Director.join(", ")}</p>
            <p className="modal-text">Writer(s): {movie.Writer.join(", ")}</p>
            <p className="modal-text">Actors: {movie.Actors.join(", ")}</p>
            <p className="modal-text">Plot: {movie.Plot}</p>
            <p className="modal-text">Awards: {movie.Awards}</p>
            <p className="modal-text">Box Office: {movie.BoxOffice}</p>
            <p className="modal-text">IMDb ID: {movie.imdbID}</p>
            <p className="modal-text">IMDb Rating: {movie.imdbRating}</p>
            <div className="modal-CRUD-buttons">
              <button onClick={handleUpdate}>EDIT</button> 
              <button onClick={handleDelete}>DELETE</button>
            </div>
          </div>
        }

        <button id="x" onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
