import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MovieSubmission from "../components/MovieSubmission"
// import { createMovie } from "../services/movies.js"

export default function MovieSubmissions() {
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    // Rated: "",
    // Released: "",
    // Runtime: "",
    // Genre: [],
    // Director: [],
    // Writer: [],
    // Actors: [],
    // Plot: "",
    // Language: [],
    // Country: [],
    // Awards: "",
    // Poster: "",
    // BoxOffice: "",
    // imdbID: "",
    // imdbRating: "",
    // Stills: [],
  })
  
  const [submission, setSubmission] = useState(false)

  // let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // await createMovie(movie)
    // navigate("/movies")
    setSubmission(true)
  }

  const handleSubmission = () => (
    <MovieSubmission movieTitle={movie.Title} movieYear={movie.Year} />
    // setSubmission(false)
  )

  const handleChange = (e) => {
    const { name, value } = e.target

    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Add a movie to our Database!</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title"
          placeholder="Movie Title"
          value={movie.Title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Year"
          placeholder="Year Released"
          value={movie.Year}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Current Submissions</h2>

      {submission ? handleSubmission() : null }
    </div>
  )
}
