import { useEffect, useRef, useState } from "react"
import { deleteMovie } from "../services/movies.js"

export default function Modal({ movie, closeModal, closeModalKeyDown }) {
  const ref = useRef(null)
  
  useEffect(() => {
    ref.current.focus()
  }, [])

  async function handleDelete() {
    await deleteMovie(movie._id)
    closeModal()
    window.location.reload()
  }

  const [update, setUpdate] = useState(false)

  function handleUpdate() {
    setUpdate(true);
  }

  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div tabIndex={-1} ref={ref} onKeyDown={closeModalKeyDown} className="modal-container">

        <img className="modal-image" src={movie.Poster}></img>

        {update
          ?
          <div><p>Editing</p></div>
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
