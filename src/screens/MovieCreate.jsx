import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createMovie } from "../services/movies.js"

export default function MovieCreate() {
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: [],
    Director: [],
    Writer: [],
    Actors: [],
    Plot: "",
    Language: [],
    Country: [],
    Awards: "",
    Poster: "",
    BoxOffice: "",
    imdbID: "",
    imdbRating: "",
    Stills: [],
})

  let navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault()
     await createMovie(movie)
     console.log(movie)
    navigate("/add-movie")
  }

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
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title"
          placeholder="Movie Title"
          value={movie.Title}
          onChange={handleChange}
        />
        <button type="submit">Add your movie!</button>
      </form>
    </div>
  )
}
