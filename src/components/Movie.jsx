export default function Movie({ movie }) {
  return (
    <div className="individual-movie-div">
      <div className="movie-container">
      <h2>{movie.Title}</h2>
      <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
      {/* <p>{ movie.Year }</p>
      <p>{ movie.Rated }</p>
      <p>{ movie.Released.slice(0,10) }</p>
      <p>{ movie.Runtime }</p> */}
      </div>
    </div>
  )
}
