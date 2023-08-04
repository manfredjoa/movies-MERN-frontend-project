export default function Movie({ movie, showModal }) {
  return (
    <div className="individual-movie-div">
      <div className="movie-container">
        <h2 onClick={() => showModal(movie)}>{movie.Title}</h2>
        <img onClick={() => showModal(movie)} className="movie-poster" src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  )
}
