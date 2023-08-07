import { useEffect, useRef, useState } from "react"
import { deleteMovie } from "../services/movies.js"

export default function Modal({ movie, closeModal, closeModalKeyDown }) {
  const [update, setUpdate] = useState(false)
  const [moviee, setMoviee] = useState(null)
  const ref = useRef(null)
  
  useEffect(() => {
    ref.current.focus()
  }, [])

  async function handleDelete() {
    await deleteMovie(movie._id)
    closeModal()
    window.location.reload()
  }

  function handleUpdate() {
    setUpdate(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setMoviee(prevMovie => ({
      ...prevMovie,
      [name]: value
    }))
  }

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

        <img className="modal-image" src={movie.Poster}></img>

        {update
          ?
          <div className="modal-input-container">
            <form className="modal-input">
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
                Rating:
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
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleUpdate}>EDIT</button> 
          </div>
        }

        <button id="x" onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
