export default function Movie({ movie }) {
  return (
    <div>
      <p>{ movie.Title }</p>
      <p>{ movie.Year }</p>
      <p>{ movie.Rated }</p>
      <p>{ movie.Released }</p>
      <p>{ movie.Runtime }</p>
    </div>
  )
}
