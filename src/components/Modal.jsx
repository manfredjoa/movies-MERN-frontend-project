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
                  type="text"
                  name="Title"
                  value={movie.Title}  
                  onChange={handleChange}
                />
              </label>  
              <label>
                Year:
                <input
                  type="number"
                  name="Year"
                  value={movie.Year}
                  onChange={handleChange}
                />
              </label>  
              <label>
                Rated:
                <input
                  type="text"
                  name="Rated"
                  value={movie.Rated}
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
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleUpdate}>EDIT</button> 
          </div>
        }

        <button id="x" onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
