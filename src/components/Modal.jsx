export default function Modal({ movie, closeModal, closeModalKeyDown }) {
  return (
    <div>
      <div className="overlay" onClick={closeModal}></div>
      <div onKeyDown={closeModalKeyDown} className="modal-container">

        <img className="modal-image" src={movie.Poster}></img>

        <div>
          <p className="modal-text">Title: {movie.Title}</p>
          <p className="modal-text">Year: {movie.Year}</p>
          <p className="modal-text">Rating: {movie.Rated}</p>
        </div>

        <button onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
